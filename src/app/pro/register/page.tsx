
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, setDoc } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  fullName: z.string().min(2, {
    message: 'Please enter your full name.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  marketingOffers: z.boolean().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms of use.',
  }),
});

export default function ProRegisterPage() {
  const router = useRouter();
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!isUserLoading && user) {
      if (user.emailVerified) {
        router.push('/pro/dashboard');
      } else {
        router.push('/pro/verify-email');
      }
    }
  }, [user, isUserLoading, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      fullName: '',
      email: '',
      password: '',
      marketingOffers: false,
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (!auth || !firestore) {
        throw new Error('Firebase services are not initialized');
      }
  
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      // 1. Update Auth Profile
      await updateProfile(user, {
        displayName: values.fullName
      });

      // 2. Send Verification Email
      await sendEmailVerification(user);

      // 3. Create User Role document in Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        uid: user.uid,
        email: values.email,
        fullName: values.fullName,
        phone: values.phoneNumber,
        role: 'pro',
        createdAt: new Date().toISOString(),
      });

      // 4. Create initial empty professional profile
      await setDoc(doc(firestore, 'professionalProfiles', user.uid), {
        userId: user.uid,
        name: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        rating: 0,
        reviews: 0,
        creditBalance: 0,
        leadCount: 0,
        isProVerified: false,
        priorityRank: 0,
        createdAt: new Date().toISOString(),
      });

      toast({
        title: "Account Created",
        description: "Welcome to Gaupro! Please check your email to verify your account.",
      });

      router.push('/pro/verify-email');
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isUserLoading) {
    return (
      <div className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-secondary/50">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <main className="flex-grow">
      <div className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-secondary/50 py-12 px-4">
        <div className="w-full max-w-4xl">
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg">
            <div className="hidden md:flex flex-col items-center justify-center bg-card p-10 text-center border-r">
              <div className="mb-6">
                  <Logo />
              </div>
              <p className="text-muted-foreground">
                  You want new customers fast. So we made it easy and it's free.
              </p>
            </div>
            
            <div className="p-8">
              <div className="text-left mb-8">
                <h1 className="text-2xl font-normal text-foreground">Create your Free Pro Account</h1>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Cell Phone Number" {...field} className="h-12"/>
                        </FormControl>
                        <FormDescription className="text-xs">
                          We'll use this to send you lead notifications.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name (First and Last Name)" {...field} className="h-12"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Your Email Address" {...field} className="h-12"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="password" placeholder="Create a Password" {...field} className="h-12"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="marketingOffers"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal text-muted-foreground">
                            I want to receive Marketing and Promotional offers
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                           <FormLabel className="font-normal text-muted-foreground">
                              By clicking Next, you agree to the{' '}
                              <Link href="/terms" className="text-primary hover:underline">
                                  Terms of use
                              </Link>
                           </FormLabel>
                           <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base" size="lg" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Next'}
                  </Button>
                </form>
              </Form>
              
              <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                      Already have an account?{' '}
                      <Link href="/pro/login" className="text-primary font-medium hover:underline">
                          Login Here
                      </Link>
                  </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
