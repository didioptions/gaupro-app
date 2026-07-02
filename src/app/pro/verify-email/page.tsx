
'use client';

import { useState, useEffect } from 'react';
import { sendEmailVerification, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Mail, CheckCircle, Loader2, LogOut, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

export default function VerifyEmailPage() {
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  
  const [isSending, setIsSending] = useState(false);
  const [isPolled, setIsPolled] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/pro/login');
    }
    if (user?.emailVerified) {
      router.push('/pro/dashboard');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleResend = async () => {
    if (!user || cooldown > 0) return;
    setIsSending(true);
    try {
      await sendEmailVerification(user);
      setCooldown(60); // 60 second cooldown
      toast({
        title: 'Verification Email Sent',
        description: `We've sent a new verification link to ${user.email}.`,
      });
    } catch (error: any) {
      console.error('Error sending verification:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to send verification email. Please try again later.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/pro/login');
    }
  };

  const checkVerification = async () => {
    if (!user) return;
    setIsPolled(true);
    try {
      await user.reload();
      if (user.emailVerified) {
        toast({
          title: 'Success!',
          description: 'Your email has been verified.',
        });
        router.push('/pro/dashboard');
      } else {
        toast({
          title: 'Not Verified',
          description: 'Please check your email and click the verification link.',
        });
      }
    } catch (error) {
      console.error('Error reloading user:', error);
    } finally {
      setIsPolled(false);
    }
  };

  if (isUserLoading) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Mail className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription className="text-base mt-2">
            We've sent a verification link to:
            <br />
            <span className="font-bold text-foreground">{user?.email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800 leading-relaxed">
              To keep your account secure and prevent fraud, all professionals must verify their email address before accessing the marketplace.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
                onClick={checkVerification} 
                className="w-full h-12 text-base" 
                disabled={isPolled}
            >
              {isPolled ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              I've verified my email
            </Button>
            
            <Button 
                variant="outline" 
                onClick={handleResend} 
                className="w-full h-12 text-base" 
                disabled={isSending || cooldown > 0}
            >
              {isSending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RotateCcw className="mr-2 h-4 w-4" />}
              {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend verification email'}
            </Button>

            <Button variant="ghost" onClick={handleLogout} className="w-full text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out and try another email
            </Button>
          </div>
          
          <div className="text-center">
              <p className="text-xs text-muted-foreground">
                  Can't find the email? Check your spam or junk folder.
              </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
