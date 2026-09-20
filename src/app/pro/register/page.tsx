'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

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
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
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

  const handleGoogleSignUp = async () => {
    if (!auth || !firestore) return;
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      // Check if user document exists
      const userRef = doc(firestore, 'users', loggedUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        const now = serverTimestamp();
        await setDoc(userRef, {
          uid: loggedUser.uid,
          email: loggedUser.email,
          fullName: loggedUser.displayName || 'Gaupro Professional',
          phone: loggedUser.phoneNumber || '',
          role: 'pro',
          status: 'active',
          createdAt: now,
        });

        await setDoc(doc(firestore, 'professionalProfiles', loggedUser.uid), {
          userId: loggedUser.uid,
          name: loggedUser.displayName || 'Gaupro Professional',
          email: loggedUser.email,
          phone: loggedUser.phoneNumber || '',
          rating: null,
          reviews: 0,
          totalReviews: 0,
          creditBalance: 0,
          leadCount: 0,
          isProVerified: false,
          priorityRank: 0,
          createdAt: now,
          updatedAt: now,
        });
      }

      router.push('/pro/dashboard');
    } catch (error: any) {
      console.error('Google Sign-In failed:', error);
      toast({
        variant: 'destructive',
        title: 'Sign-In Failed',
        description: error.message || 'Could not sign in with Google.',
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

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

      const registeredUser = userCredential.user;

      await updateProfile(registeredUser, {
        displayName: values.fullName
      });

      const now = serverTimestamp();

      await setDoc(doc(firestore, 'users', registeredUser.uid), {
        uid: registeredUser.uid,
        email: values.email,
        fullName: values.fullName,
        phone: values.phoneNumber,
        role: 'pro',
        status: 'active',
        createdAt: now,
      });

      await setDoc(doc(firestore, 'professionalProfiles', registeredUser.uid), {
        userId: registeredUser.uid,
        name: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        rating: null,
        reviews: 0,
        totalReviews: 0,
        creditBalance: 0,
        leadCount: 0,
        isProVerified: false,
        priorityRank: 0,
        createdAt: now,
        updatedAt: now,
      });

      await sendEmailVerification(registeredUser);

      toast({
        title: "Account Created",
        description: "Please check your email to verify your account.",
      });

      router.push('/pro/verify-email');
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/50">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) return null;

  return (
    <main className="flex-grow">
      <div className="min-h-screen flex items-center justify-center bg-secondary/50 py-12 px-4">
        <div className="w-full max-w-4xl">
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg">
            <div className="hidden md:flex flex-col items-center justify-center bg-card p-10 text-center border-r">
              <div className="mb-6"><Logo /></div>
              <p className="text-muted-foreground">You want new customers fast. So we made it easy and it's free.</p>
            </div>
            
            <div className="p-8">
              <div className="text-left mb-8">
                <h1 className="text-2xl font-normal text-foreground">Create your Free Pro Account</h1>
              </div>

              <div className="space-y-4 mb-6">
                <Button 
                  variant="outline" 
                  className="w-full h-12 flex items-center justify-center gap-3 font-semibold"
                  onClick={handleGoogleSignUp}
                  disabled={isGoogleLoading || isLoading}
                >
                  {isGoogleLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  )}
                  Continue with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input placeholder="Your Cell Phone Number" {...field} className="h-12"/></FormControl>
                        <FormDescription className="text-xs">We'll use this to send you lead notifications.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input placeholder="Your Name" {...field} className="h-12"/></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input type="email" placeholder="Your Email Address" {...field} className="h-12"/></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl><Input type="password" placeholder="Create a Password" {...field} className="h-12"/></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="marketingOffers"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                        <div className="space-y-1 leading-none"><FormLabel className="font-normal text-muted-foreground">I want to receive Marketing and Promotional offers</FormLabel></div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                        <div className="space-y-1 leading-none">
                           <FormLabel className="font-normal text-muted-foreground">By clicking Next, you agree to the <Link href="/terms" className="text-primary hover:underline">Terms of use</Link></FormLabel>
                           <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base" size="lg" disabled={isLoading || isGoogleLoading}>
                    {isLoading ? 'Creating Account...' : 'Next'}
                  </Button>
                </form>
              </Form>
              <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">Already have an account? <Link href="/pro/login" className="text-primary font-medium hover:underline">Login Here</Link></p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
