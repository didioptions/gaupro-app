'use client';

import React, { useState } from 'react';
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
import { useToast } from '@/hooks/use-toast';

interface RequestReviewDialogProps {
  businessName: string;
  userName: string;
  children: React.ReactNode;
}

export function RequestReviewDialog({
  businessName,
  userName,
  children,
}: RequestReviewDialogProps) {
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState('');
  const { toast } = useToast();

  const subject = `Asking a favour - Can you rate ${businessName} on Gaupro`;
  const message = `It's ${userName} from ${businessName}. I was wondering if you could take a few seconds to write a review for me on Gaupro.co.za. I'm using Gaupro to find new customers and your review would really help me out in growing my business.

To rate me on Gaupro.co.za, Click here to rate [A link to your profile will be included here]

I really appreciate your help. It means a lot to me.

Thanks in advance for helping me out.

- ${userName}`;

  const handleSend = () => {
    toast({
        title: "Requests Sent",
        description: `Review invitations have been sent to: ${emails}`,
    });
    setOpen(false);
    setEmails('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-normal">
            Request reviews from your customers for {businessName}
          </DialogTitle>
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
            <p className="text-xs text-muted-foreground">
              Note: Each person will receive a separate email. This is not a group email.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSend} className="bg-red-500 hover:bg-red-600" disabled={!emails}>
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}