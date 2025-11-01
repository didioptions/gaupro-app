'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, DollarSign, Calendar, Clock } from 'lucide-react';

// Define a type for the job object
type Job = {
  id: number;
  category: string;
  location: string;
  title: string;
  description: string;
  posted: string;
  needed: string;
  budget: string;
  customer: {
    name: string;
    phone: string;
  };
};

interface QuoteDialogProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteDialog({ job, isOpen, onClose }: QuoteDialogProps) {
  const { toast } = useToast();

  if (!job) {
    return null;
  }

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the quote to the backend here.
    console.log('Quote submitted for job:', job.id);
    toast({
      title: 'Quote Submitted!',
      description: `Your quote for "${job.title}" has been sent.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Quote for: {job.title}</DialogTitle>
          <DialogDescription>
            You are quoting for a "{job.category}" job in {job.location}.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-6">
          <div>
            <h3 className="text-md font-semibold mb-2 text-foreground">Customer Details</h3>
            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><User className="h-4 w-4" /> <span>{job.customer.name}</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> <span>{job.customer.phone}</span></div>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="text-md font-semibold mb-2 text-foreground">Job Details</h3>
            <p className="text-muted-foreground">{job.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-muted-foreground">
                <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>Needed: {job.needed}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span>Posted: {job.posted}</span></div>
            </div>
          </div>
          <form id="quote-form" onSubmit={handleSubmitQuote} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quote-message">Your Quote / Message</Label>
              <Textarea
                id="quote-message"
                placeholder={`Hi ${job.customer.name.split(' ')[0]},\n\nI can help with your ${job.category.toLowerCase()} needs...`}
                rows={5}
                required
              />
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" form="quote-form">
            Submit Quote
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
