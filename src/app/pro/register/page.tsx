
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

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
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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

const Logo = () => (
  <span className="flex items-center space-x-2">
    <svg
      width="32"
      height="32"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path
        d="M0 26.6667L40 0L80 26.6667V80H0V26.6667Z"
        fill="hsl(var(--destructive))"
      />
      <path
        d="M45.72 56.88V48.16C45.72 44.4 44.48 41.52 41.84 39.52C39.24 37.52 35.84 36.52 31.64 36.52C27.8 36.52 24.68 37.32 22.28 38.92V27.4H53.4V20.2H14.84V60H30.8C31.76 60 32.5333 59.8533 33.12 59.56C33.7067 59.2667 34.12 58.8 34.36 58.16L35.8 54.4C36.92 56.4 38.4667 57.8933 40.44 58.88C42.4133 59.8667 44.44 60.36 46.52 60.36C49.96 60.36 52.6667 59.32 54.64 57.24C56.6133 55.16 57.6 52.2667 57.6 48.56C57.6 44.44 56.4667 41.1333 54.2 38.64C51.9333 36.1467 48.88 34.9 45.04 34.9H41.64V43.72H45.04C46.8533 43.72 48.12 44.2933 48.84 45.44C49.56 46.5867 49.92 47.92 49.92 49.44C49.92 51.16 49.3867 52.5467 48.32 53.6C47.2533 54.6533 45.8 55.28 43.96 55.48L45.72 56.88Z"
        fill="white"
      />
    </svg>
    <span className="font-extrabold text-2xl tracking-tighter">
      <span className="text-primary">aupro</span>
    </span>
  </span>
);

export default function ProRegisterPage() {
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
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
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      // After creating the user, update their profile with the full name
      await updateProfile(userCredential.user, {
        displayName: values.fullName
      });
      router.push('/pro/dashboard');
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

  return (
    <>
      <Header />
      <main className="flex-grow">
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-secondary/50 py-12 px-4">
      <div className="w-full max-w-4xl">
        <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg">
          <div className="hidden md:flex flex-col items-center justify-center bg-card p-10 text-center border-r">
            <Link href="/" className="mb-6">
                <Logo />
            </Link>
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
                        We'll send you a SMS with a 4-digit confirmation code.
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
      <Footer />
      </>
  );
}
