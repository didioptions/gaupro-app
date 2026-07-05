'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { Lock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

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
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    async function verifyCode() {
      if (!oobCode || !auth) {
        setError('Invalid or expired password reset link.');
        setIsVerifying(false);
        return;
      }
      try {
        await verifyPasswordResetCode(auth, oobCode);
        setIsVerifying(false);
      } catch (err: any) {
        console.error('Verify code error:', err);
        setError('The password reset link is invalid or has already been used.');
        setIsVerifying(false);
      }
    }
    verifyCode();
  }, [oobCode, auth]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!oobCode || !auth) return;
    setIsLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, values.password);
      setIsSuccess(true);
      toast({
        title: 'Password Updated',
        description: 'Your password has been reset successfully. You can now log in.',
      });
    } catch (err: any) {
      console.error('Confirm reset error:', err);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: err.message || 'Failed to reset password. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isVerifying) {
    return (
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="py-10 text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Verifying reset link...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="py-10 text-center space-y-6">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold">Invalid Link</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button asChild className="w-full">
            <Link href="/pro/forgot-password">Request new link</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="py-10 text-center space-y-6">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
          <h2 className="text-2xl font-bold">Password reset!</h2>
          <p className="text-muted-foreground">
            Your password has been changed. You can now use your new password to sign in to Gaupro.
          </p>
          <Button asChild className="w-full h-12 text-base">
            <Link href="/pro/login">Log In Now</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
           <div className="p-3 bg-primary/10 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
           </div>
        </div>
        <CardTitle className="text-2xl">New Password</CardTitle>
        <CardDescription>
          Please enter a new password for your Gaupro account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="h-12"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} className="h-12"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-12 text-base mt-2" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Reset Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin text-primary" />}>
        <ResetPasswordContent />
      </Suspense>
    </main>
  );
}
