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
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface InviteFriendsDialogProps {
  user: User | null;
  children: React.ReactNode;
}

export function InviteFriendsDialog({ user, children }: InviteFriendsDialogProps) {
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState('');

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
    console.log('Sending invites to:', emails);
    // In a real application, this would trigger an API call to a backend service to send emails.
    setOpen(false); // Close the dialog after sending
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
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
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSend} className="bg-red-500 hover:bg-red-600">
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
