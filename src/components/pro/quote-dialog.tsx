'use client';

import React, { useState, useEffect } from 'react';
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
import { User, Phone, DollarSign, Calendar, Clock, Loader2, Mail, MapPin, Lock } from 'lucide-react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface QuoteDialogProps {
  job: any | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteDialog({ job, isOpen, onClose }: QuoteDialogProps) {
  const [privateData, setPrivateData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const db = getFirestore();

  useEffect(() => {
    if (isOpen && job) {
      const fetchPrivateData = async () => {
        setLoading(true);
        try {
          const docRef = doc(db, 'leads_private', job.id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPrivateData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching private data:", error);
          toast({
            variant: 'destructive',
            title: 'Permission Error',
            description: 'Could not retrieve customer details.',
          });
        } finally {
          setLoading(false);
        }
      };
      fetchPrivateData();
    } else {
      setPrivateData(null);
    }
  }, [isOpen, job, db, toast]);

  if (!job) return null;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Quote Submitted!',
      description: `Your quote for "${job.category}" has been sent.`,
    });
    onClose();
  };

  const getPostedTime = (createdAt: any) => {
    if (!createdAt) return 'Recently';
    const date = createdAt.seconds ? new Date(createdAt.seconds * 1000) : new Date(createdAt);
    return date.toLocaleDateString();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Lead Details: {job.category}
          </DialogTitle>
          <DialogDescription>
            Verified request for {job.category} in {job.location}.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <Card className="bg-secondary/30 border-0">
            <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Customer Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {loading ? (
                  <div className="flex items-center gap-2 py-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Decrypting details...</span>
                  </div>
              ) : privateData ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-full border shadow-sm">
                             <User className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Name</p>
                              <p className="font-bold text-foreground">{privateData.customerName}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-3">
                           <div className="p-2 bg-white rounded-full border shadow-sm">
                             <Phone className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Phone</p>
                              <p className="font-bold text-foreground">{privateData.customerPhone}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-3">
                           <div className="p-2 bg-white rounded-full border shadow-sm">
                             <Mail className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Email</p>
                              <p className="font-bold text-foreground truncate max-w-[200px]">{privateData.customerEmail}</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-3">
                           <div className="p-2 bg-white rounded-full border shadow-sm">
                             <MapPin className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                              <p className="text-[10px] uppercase font-bold text-muted-foreground">Preferred Contact</p>
                              <p className="font-bold text-foreground capitalize">{privateData.contactTime || 'Anytime'}</p>
                          </div>
                      </div>
                  </div>
              ) : (
                  <p className="text-sm text-red-600 font-bold">Failed to load contact data.</p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Scope</h3>
            <div className="p-4 border rounded-lg bg-white leading-relaxed">
                <p className="text-sm text-foreground">{job.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /> <span>Req. Date: {job.dateNeeded}</span></div>
                <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> <span>Posted: {getPostedTime(job.createdAt)}</span></div>
            </div>
          </div>

          <form id="quote-form" onSubmit={handleSubmitQuote} className="space-y-4 border-t pt-6">
            <div className="space-y-2">
              <Label htmlFor="quote-message" className="font-bold">Your Professional Quote</Label>
              <Textarea
                id="quote-message"
                placeholder={privateData ? `Hi ${privateData.customerName.split(' ')[0]}, I can assist with your ${job.category} project...` : "Type your quote here..."}
                rows={5}
                required
              />
            </div>
          </form>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button type="button" variant="outline" onClick={onClose} className="sm:flex-1">
            Cancel
          </Button>
          <Button type="submit" form="quote-form" className="sm:flex-1 bg-red-600 hover:bg-red-700">
            Submit Quote
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}