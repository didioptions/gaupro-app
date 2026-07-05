'use client';

import React, { useState } from 'react';
import { User } from 'firebase/auth';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2 } from 'lucide-react';

interface InviteFriendsDialogProps {
  user: User | null;
  children: React.ReactNode;
}

export function InviteFriendsDialog({ user, children }: InviteFriendsDialogProps) {
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const ownerName = user?.displayName || user?.email || 'Your Friend';

  const subject = `${ownerName} thinks Gaupro is the perfect way for you to find new customers and grow your business!`;
  const message = `Join Gaupro today and start connecting with real clients looking for trusted professionals like you.

As a welcome gift, when you sign up and activate your profile, you’ll receive 5 free credits to get started.
Use our promo code: STARTUP-0217 to claim your credits. 

How Gaupro Works

Customers tell us what they need.

We send you free notifications of relevant quote requests that match your services.

When you find a request you like, use your Gaupro credits to unlock the customer’s contact details.

Send your quote, chat directly with the client, and once hired — get the job done and grow your reputation!

Connecting with the right customers has never been easier.

— The Gaupro Team, on behalf of ${ownerName}`;

  const handleSend = () => {
    setIsSending(true);
    // In a real application, this would trigger an API call to a backend service to send emails.
    setTimeout(() => {
        setIsSending(false);
        setIsSent(true);
    }, 1000);
  };
  
  const resetAndClose = () => {
    setOpen(false);
    // Reset state after a short delay to allow the dialog to close smoothly
    setTimeout(() => {
        setIsSent(false);
        setIsSending(false);
        setEmails('');
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
        if (!isOpen) {
            resetAndClose();
        } else {
            setOpen(true);
        }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {!isSent ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center font-normal">Invite Friends</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="emails">Enter email addresses manually</Label>
                <Textarea
                  id="emails"
                  placeholder="Separate each email address with a comma."
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={subject} readOnly className="bg-secondary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} readOnly rows={10} className="bg-secondary" />
                 <p className="text-xs text-muted-foreground">Note: Each person will receive a separate email. This is not a group email.</p>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={resetAndClose} disabled={isSending}>
                Cancel
              </Button>
              <Button type="button" onClick={handleSend} className="bg-red-500 hover:bg-red-600" disabled={isSending || !emails}>
                {isSending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Send
              </Button>
            </DialogFooter>
          </>
        ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 space-y-6">
                <Check className="h-12 w-12 text-teal-500"/>
                <p className="text-lg">Thank you. Your invite was sent successfully to friends!</p>
                <Button onClick={resetAndClose} className="bg-teal-500 hover:bg-teal-600 text-white">
                    Back to Dashboard
                </Button>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
