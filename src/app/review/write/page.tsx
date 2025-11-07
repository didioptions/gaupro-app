
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getProfessionalById } from '@/lib/professionals-data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

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
  const proId = searchParams.get('proId');
  const professional = proId ? getProfessionalById(proId) : null;
  
  const [hoverRating, setHoverRating] = useState(0);
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

  const onSubmit = (values: z.infer<typeof reviewSchema>) => {
    console.log('Review submitted:', values);
    toast({
      title: 'Review Submitted!',
      description: 'Thank you for your feedback.',
    });
    router.push(`/pro/${proId}`);
  };
  
  if (!professional) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Professional Not Found</CardTitle>
            </CardHeader>
            <CardContent>
                <p>We couldn't find the professional you're trying to review.</p>
                <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
            </CardContent>
        </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-center font-normal">
          Write a Review for {professional.name}
          <span className="block text-base font-normal text-muted-foreground mt-1">
            {professional.location}
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
                    <Label className="text-base">Your rating</Label>
                    <div
                      className="flex gap-1"
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 cursor-pointer transition-colors ${
                            (hoverRating || field.value) >= star
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                          onMouseEnter={() => setHoverRating(star)}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Roll over the stars, then click to rate
                    </span>
                  </div>
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
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                    <FormControl>
                        <Input placeholder="Your Cell Phone Number" {...field} />
                    </FormControl>
                    <p className="text-xs text-muted-foreground mt-1">Your number will not be displayed publicly</p>
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
                    <FormItem className="flex items-start space-x-2">
                        <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="decline" className="text-sm font-normal text-muted-foreground">
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
                    <FormItem className="flex items-start space-x-2">
                        <FormControl>
                           <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="liability" className="text-sm font-normal text-muted-foreground">
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
                    <FormItem className="flex items-start space-x-2">
                         <FormControl>
                           <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                           I accept the terms and conditions for user reviews. <a href="/terms" target="_blank" className="text-primary hover:underline">Click here to view terms and conditions</a>
                        </Label>
                         <FormMessage className="ml-2" />
                    </FormItem>
                  )}
                 />
              </div>
            </div>

            <div className="flex justify-end items-center gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Submit
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
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent className="space-y-6">
            <Skeleton className="h-8 w-full" />
            <div className="grid sm:grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-24 w-full" />
             <div className="pt-4 border-t space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
             </div>
            <div className="flex justify-end gap-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
        </CardContent>
    </Card>
)

export default function WriteReviewPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-secondary/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSkeleton />}>
            <WriteReviewContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
