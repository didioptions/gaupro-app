'use client';

import React, { useState, Suspense, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getProfessionalById } from '@/lib/professionals-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Loader2, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useFirestore, useDoc } from '@/firebase';

const reviewSchema = z.object({
  rating: z.number().min(1, 'Please select a rating'),
  name: z.string().min(2, 'Name is required'),
  phone: z.string().optional(),
  comment: z.string().min(10, 'Review must be at least 10 characters'),
  decline: z.boolean().refine(val => val === true, 'You must accept this condition'),
  liability: z.boolean().refine(val => val === true, 'You must accept this condition'),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

function WriteReviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const proId = searchParams.get('proId') || '';
  
  const firestore = useFirestore();
  const staticPro = useMemo(() => getProfessionalById(proId), [proId]);
  
  const proDocRef = useMemo(() => {
    if (!firestore || !proId || staticPro) return null;
    return doc(firestore, 'professionalProfiles', proId);
  }, [firestore, proId, staticPro]);

  const { data: dbPro, isLoading: isLoadingPro } = useDoc(proDocRef);

  const professional = staticPro || dbPro;
  
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      name: '',
      phone: '',
      comment: '',
      decline: false,
      liability: false,
      terms: false,
    },
  });

  const calculateFraudScore = (comment: string) => {
      let score = 0;
      const spamKeywords = ['crypto', 'invest', 'earn', 'money', 'scam', 'fake'];
      const words = comment.toLowerCase().split(' ');
      
      if (words.length < 5) score += 30;
      spamKeywords.forEach(keyword => {
          if (words.includes(keyword)) score += 20;
      });
      
      return Math.min(score, 100);
  };

  const onSubmit = async (values: z.infer<typeof reviewSchema>) => {
    if (!proId || !professional || !firestore) return;
    
    setIsSubmitting(true);
    try {
        const reviewId = Math.random().toString(36).substring(7);
        const reviewRef = doc(firestore, 'professionalProfiles', proId, 'reviews', reviewId);
        
        const fraudScore = calculateFraudScore(values.comment);

        await setDoc(reviewRef, {
            author: values.name,
            phone: values.phone || '',
            rating: values.rating,
            comment: values.comment,
            proUid: proId,
            proName: professional.name,
            status: fraudScore > 70 ? 'flagged' : 'pending',
            fraudScore,
            dateCreated: new Date().toISOString(),
            createdAt: serverTimestamp()
        });

        toast({
          title: 'Review Submitted!',
          description: 'Thank you! Your review is pending moderation and will be visible shortly.',
        });
        router.push(`/pro/${proId}`);
    } catch (error: any) {
        toast({ 
            variant: 'destructive', 
            title: 'Submission Error', 
            description: error.message || 'Failed to submit review. Please try again.' 
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isLoadingPro) {
    return <LoadingSkeleton />;
  }
  
  if (!professional) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Professional Not Found</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">We couldn't find the professional you're trying to review. Please make sure the link is correct.</p>
                <Button onClick={() => router.push('/')} className="mt-4">Return Home</Button>
            </CardContent>
        </Card>
    );
  }

  const displayLocation = professional.location || (Array.isArray(professional.locations) ? professional.locations.join(', ') : 'Location not specified');

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-center font-normal">
          Write a Review for {professional.name}
          <span className="block text-base font-normal text-muted-foreground mt-1 flex items-center justify-center gap-1">
             <MapPin className="h-4 w-4" /> {displayLocation}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Controller
              name="rating"
              control={form.control}
              render={({ field, fieldState }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <Label className="text-base font-bold">Your rating</Label>
                    <div
                      className="flex gap-1"
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-7 w-7 cursor-pointer transition-colors ${
                            (hoverRating || field.value) >= star
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                          onMouseEnter={() => setHoverRating(star)}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Roll over the stars, then click to rate</p>
                  {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                </FormItem>
              )}
            />

            <div className="grid sm:grid-cols-2 gap-4">
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cellphone Number</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g. 082 123 4567" {...field} className="h-12" />
                    </FormControl>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-wider">Your number will not be displayed publicly</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the service you were provided, what went well, what could have been better?"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                   <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">Note: Your review will be posted on the www.gaupro.co.za website subject to conditions:</p>
              <div className="space-y-3">
                 <FormField
                  control={form.control}
                  name="decline"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2 space-y-0">
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="decline" className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           Gaupro reserves the right to decline and remove reviews
                        </Label>
                         <FormMessage className="ml-2" />
                    </FormItem>
                  )}
                 />
                 <FormField
                  control={form.control}
                  name="liability"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2 space-y-0">
                        <FormControl>
                           <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="liability" className="text-sm font-normal text-muted-foreground leading-none">
                           Gaupro will not be held liable or accept responsibility for any reviews posted for any business.
                        </Label>
                         <FormMessage className="ml-2" />
                    </FormItem>
                  )}
                 />
                 <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2 space-y-0">
                         <FormControl>
                           <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground leading-none">
                           I accept the terms and conditions for user reviews. <a href="/terms" target="_blank" className="text-primary hover:underline font-bold">Click here to view terms and conditions</a>
                        </Label>
                         <FormMessage className="ml-2" />
                    </FormItem>
                  )}
                 />
              </div>
            </div>

            <div className="flex justify-end items-center gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" className="bg-red-600 hover:bg-red-700 min-w-[140px] h-12 font-bold" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                Submit Review
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

const LoadingSkeleton = () => (
    <Card className="max-w-2xl mx-auto">
        <CardHeader className="items-center">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-1/2 mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
               <Skeleton className="h-6 w-24" />
               <Skeleton className="h-8 w-40" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-12 w-full" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </div>
            <div className="space-y-2">
               <Skeleton className="h-4 w-24" />
               <Skeleton className="h-32 w-full" />
            </div>
             <div className="pt-4 border-t space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
             </div>
            <div className="flex justify-end gap-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-12 w-32" />
            </div>
        </CardContent>
    </Card>
)

export default function WriteReviewPage() {
  return (
    <main className="flex-grow bg-secondary/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Suspense fallback={<LoadingSkeleton />}>
          <WriteReviewContent />
        </Suspense>
      </div>
    </main>
  );
}
