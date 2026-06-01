
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  rememberMe: z.boolean().optional(),
});

export default function ProLoginPage() {
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (!auth) {
        throw new Error('Authentication is not initialized');
      }
      
      await signInWithEmailAndPassword(auth, values.email, values.password);
      router.push('/pro/dashboard');
    } catch (error: any) {
      console.error('Login failed:', error);
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (error.code === 'auth/invalid-credential') {
        errorMessage =
          'Invalid email or password. Please check your credentials and try again.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email address.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex-grow">
      <div className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-secondary/50 py-12 px-4">
        <div className="w-full max-w-md">
          <Card className="p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">Pro Login</h1>
              <p className="text-muted-foreground">Access your dashboard</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} className="h-12"/>
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                         <FormControl>
                           <Checkbox
                              id="remember-me"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                         </FormControl>
                         <Label htmlFor="remember-me" className="font-normal text-sm text-muted-foreground">Remember me</Label>
                      </FormItem>
                  )}
                 />

                <Button type="submit" className="w-full h-12 text-base" size="lg" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </form>
            </Form>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/pro/register" className="text-primary font-medium hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
