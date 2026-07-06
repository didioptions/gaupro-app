
'use client';

import { useState, useEffect } from 'react';
import { sendEmailVerification, signOut, updateEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Mail, CheckCircle, Loader2, LogOut, RotateCcw, AlertCircle, HelpCircle, Edit2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth, useUser, useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { doc, updateDoc } from 'firebase/firestore';

export default function VerifyEmailPage() {
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const [isSending, setIsSending] = useState(false);
  const [isPolled, setIsPolled] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/pro/login');
    }
    if (user?.emailVerified) {
      router.push('/pro/dashboard');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    if (!user || user.emailVerified || isUserLoading) return;

    const interval = setInterval(async () => {
      try {
        await user.reload();
        if (user.emailVerified) {
          clearInterval(interval);
          window.location.href = '/pro/dashboard';
        }
      } catch (error) {
        // Silently ignore background refresh errors
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [user, isUserLoading]);

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
      setCooldown(60);
      toast({
        title: 'Verification Email Sent',
        description: `We've sent a new verification link to ${user.email}.`,
      });
    } catch (error: any) {
      console.error('Error sending verification:', error);
      let message = 'Failed to send verification email. Please try again later.';
      if (error.code === 'auth/too-many-requests') {
          message = 'We have sent too many emails to this address. Please wait a while before trying again.';
      }
      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChangeEmail = async () => {
    if (!user || !newEmail || !firestore) return;
    setIsUpdatingEmail(true);
    try {
      // 1. Update Firebase Auth Email
      await updateEmail(user, newEmail);
      
      // 2. Update Firestore User Document
      await updateDoc(doc(firestore, 'users', user.uid), {
        email: newEmail
      });

      // 3. Update Firestore Professional Profile
      await updateDoc(doc(firestore, 'professionalProfiles', user.uid), {
        email: newEmail
      });

      // 4. Send new verification
      await sendEmailVerification(user);

      toast({
        title: 'Email Updated',
        description: `Your email has been changed to ${newEmail} and a new verification link was sent.`,
      });
      setIsChangingEmail(false);
      setCooldown(60);
    } catch (error: any) {
      console.error('Error updating email:', error);
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: error.message || 'Could not update email. You may need to log out and log back in to perform this sensitive action.',
      });
    } finally {
      setIsUpdatingEmail(false);
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
          description: 'Your email has been verified. Accessing dashboard...',
        });
        window.location.href = '/pro/dashboard';
      } else {
        toast({
          title: 'Not Verified',
          description: 'Please check your email and click the verification link.',
        });
      }
    } catch (error: any) {
      console.error('Error reloading user:', error);
      toast({
        variant: 'destructive',
        title: 'Refresh Failed',
        description: 'Failed to check verification status. Please try again.',
      });
    } finally {
      setIsPolled(false);
    }
  };

  if (isUserLoading) return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </main>
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 p-4">
      <Card className="max-w-md w-full shadow-xl mb-8">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Mail className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription className="text-base mt-2">
            {!isChangingEmail ? (
              <>
                We've sent a verification link to:
                <br />
                <span className="font-bold text-foreground">{user?.email}</span>
              </>
            ) : (
              'Enter your correct email address below.'
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          {!isChangingEmail ? (
            <>
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

                <Button variant="ghost" onClick={() => setIsChangingEmail(true)} className="text-primary text-sm font-bold">
                  <Edit2 className="mr-2 h-4 w-4" /> I made a typo in my email
                </Button>

                <Button variant="ghost" onClick={handleLogout} className="w-full text-muted-foreground">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out and try another account
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
               <div className="space-y-2">
                  <Label>New Email Address</Label>
                  <Input 
                    type="email" 
                    placeholder="e.g. name@gmail.com" 
                    value={newEmail} 
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
               </div>
               <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsChangingEmail(false)} className="flex-1">Cancel</Button>
                  <Button onClick={handleChangeEmail} disabled={!newEmail || isUpdatingEmail} className="flex-1">
                    {isUpdatingEmail ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                    Update & Resend
                  </Button>
               </div>
               <p className="text-xs text-muted-foreground text-center">
                 Note: For security, you might be asked to log in again if your session is old.
               </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="max-w-md w-full">
          <Accordion type="single" collapsible className="w-full bg-white/50 rounded-lg border px-4">
              <AccordionItem value="help" className="border-0">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-primary" />
                        Not receiving the link?
                      </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground space-y-3 pb-4">
                      <div className="flex gap-2">
                          <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
                          <p><strong>Check your Spam/Junk folder:</strong> Look for an email from <em>Gaupro</em> or <em>noreply@studio-5618...</em></p>
                      </div>
                      <div className="flex gap-2">
                          <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
                          <p><strong>Wait a few minutes:</strong> Sometimes local servers or email providers delay incoming automated mail.</p>
                      </div>
                      <div className="flex gap-2">
                          <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />
                          <p><strong>Check the spelling:</strong> Ensure your email <em>{user?.email}</em> is typed exactly right. Use the "Change Email" button above if needed.</p>
                      </div>
                      <div className="flex gap-2 border-t pt-2 mt-2">
                          <p>Still stuck? Email us at <a href="mailto:support@gaupro.co.za" className="text-primary hover:underline font-bold">support@gaupro.co.za</a> and we'll help you manually verify.</p>
                      </div>
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
      </div>
    </main>
  );
}
