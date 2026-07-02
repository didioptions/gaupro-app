
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Mail, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';

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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function ForgotPasswordPage() {
  const auth = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (!auth) throw new Error('Auth not initialized');
      
      await sendPasswordResetEmail(auth, values.email);
      setIsSent(true);
      toast({
        title: 'Reset Link Sent',
        description: `Check ${values.email} for password reset instructions.`,
      });
    } catch (error: any) {
      console.error('Password reset error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to send password reset email.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          {!isSent ? (
            <>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                   <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-8 w-8 text-primary" />
                   </div>
                </div>
                <CardTitle className="text-2xl">Reset Password</CardTitle>
                <CardDescription>
                  Enter your email and we'll send you a link to reset your password.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Send Reset Link
                    </Button>
                  </form>
                </Form>
                <div className="text-center mt-4">
                   <Link href="/pro/login" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-2">
                      <ArrowLeft className="h-4 w-4" /> Back to login
                   </Link>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="py-10 text-center space-y-6">
              <div className="flex justify-center mb-4">
                 <div className="p-4 bg-green-50 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                 </div>
              </div>
              <h2 className="text-2xl font-bold">Check your email</h2>
              <p className="text-muted-foreground">
                We've sent a password reset link to <span className="font-bold text-foreground">{form.getValues().email}</span>. Please check your inbox and follow the instructions.
              </p>
              <Button asChild className="w-full h-12">
                 <Link href="/pro/login">Return to Login</Link>
              </Button>
              <button 
                onClick={() => setIsSent(false)} 
                className="text-sm text-primary hover:underline"
              >
                Didn't receive the email? Try again
              </button>
            </CardContent>
          )}
        </Card>
      </div>
    </main>
  );
}
