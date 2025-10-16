'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
  marketingOffers: z.boolean().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms of use.',
  }),
});

export default function ProRegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      fullName: '',
      email: '',
      marketingOffers: false,
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement registration logic
    console.log(values);
    router.push('/pro/dashboard');
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
                <span className="font-extrabold text-3xl tracking-tighter">GAU<span className="text-primary">PRO</span></span>
            </Link>
            <p className="text-muted-foreground">
                You want new customers fast. So we made it easy and it's free.
            </p>
          </div>
          
          <div className="p-8">
            <div className="text-left mb-8">
              <h1 className="text-2xl font-bold text-foreground">Create your Free Pro Account</h1>
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

                <Button type="submit" className="w-full h-12 text-base" size="lg">
                  Next
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
