'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, DollarSign, Users, Clock, Lock, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { QuoteDialog } from '@/components/pro/quote-dialog';

const jobRequests = [
  {
    id: 1,
    category: 'Plumbing',
    location: 'Sandton, Johannesburg',
    title: 'Leaky kitchen sink faucet',
    description: 'The faucet under my kitchen sink has a steady drip. Need a plumber to diagnose and fix the issue. It seems to be coming from the base of the faucet itself.',
    posted: '1 minute ago',
    needed: 'As soon as possible',
    budget: 'R500 - R1000',
    quotes: 2,
    credits: 3,
    customer: {
      name: 'Jane Doe',
      phone: '082 123 4567',
    }
  },
  {
    id: 2,
    category: 'Painting',
    location: 'Rosebank, Johannesburg',
    title: 'Paint interior of 2-bedroom apartment',
    description: 'Looking to repaint the interior walls of a 2-bedroom apartment (living room, two bedrooms). All paint will be supplied. Walls are in good condition, just need a color change.',
    posted: '1 day ago',
    needed: 'In the next few days',
    budget: 'Quote Required',
    quotes: 5,
    credits: 3,
    customer: {
      name: 'John Smith',
      phone: '083 987 6543',
    }
  },
  {
    id: 3,
    category: 'Electrical',
    location: 'Germiston, Gauteng',
    title: 'Fix flickering lights in living room',
    description: 'The main ceiling lights in my living room have started flickering. It happens intermittently. Suspecting a wiring issue or a problem with the dimmer switch.',
    posted: '3 days ago',
    needed: 'I\'m flexible',
    budget: 'Quote Required',
    quotes: 1,
    credits: 4,
    customer: {
      name: 'Peter Jones',
      phone: '071 234 5678',
    }
  },
  {
    id: 4,
    category: 'Gardening',
    location: 'Randburg, Johannesburg',
    title: 'Garden clean-up and lawn mowing',
    description: 'My garden is overgrown and needs a major clean-up, including mowing the lawn, weeding the flowerbeds, and trimming the hedges. It\'s a medium-sized garden.',
    posted: '5 days ago',
    needed: 'As soon as possible',
    budget: 'R800 - R1500',
    quotes: 8,
    credits: 2,
    customer: {
      name: 'Susan Williams',
      phone: '060 111 2222',
    }
  },
  {
    id: 5,
    category: 'Building',
    location: 'Pretoria, Gauteng',
    title: 'Build a new boundary wall',
    description: 'I need a new brick boundary wall built on one side of my property. The length is approximately 20 meters. Please include foundation work in the quote.',
    posted: '1 week ago',
    needed: 'Within a month',
    budget: 'R25000 - R40000',
    quotes: 4,
    credits: 5,
    customer: {
      name: 'Michael Brown',
      phone: '072 333 4444',
    }
  },
  {
    id: 6,
    category: 'Cleaning',
    location: 'Cape Town, Western Cape',
    title: 'Deep clean of 3-bedroom house',
    description: 'End-of-lease deep cleaning required for a 3-bedroom, 2-bathroom house. Includes oven, windows, and carpets. Must be completed by the end of the week.',
    posted: '1 week ago',
    needed: 'By this weekend',
    budget: 'R1500 - R2500',
    quotes: 11,
    credits: 2,
    customer: {
      name: 'Emily Davis',
      phone: '084 555 6666',
    }
  },
  {
    id: 7,
    category: 'Handyman',
    location: 'Durban, KwaZulu-Natal',
    title: 'Hang pictures and assemble flat-pack furniture',
    description: 'I have 5 large pictures to hang on various walls and a new bookshelf from a flat-pack that needs to be assembled. Need someone with their own tools.',
    posted: '2 weeks ago',
    needed: 'I\'m flexible',
    budget: 'R400 - R700',
    quotes: 3,
    credits: 1,
    customer: {
      name: 'Chris Green',
      phone: '076 777 8888',
    }
  },
];

type Job = typeof jobRequests[0];

const MAX_QUOTES_ALLOWED = 5;

export default function BrowseQuotesPage() {
  const [creditBalance, setCreditBalance] = useState(25);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const handleUnlockClick = (job: Job) => {
    if (!user) {
      router.push('/pro/login');
      return;
    }
    if (creditBalance >= job.credits) {
      setCreditBalance(prevBalance => prevBalance - job.credits);
      setSelectedJob(job);
    } else {
      toast({
        variant: 'destructive',
        title: 'Insufficient Credits',
        description: 'You do not have enough credits to unlock this job. Please buy more credits.',
      });
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-secondary/30">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-normal mb-4">Latest Job Requests</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Browse the latest opportunities from customers in your area. Unlock leads to get contact details and submit your quote.
                </p>
              </div>

              <div className="max-w-3xl mx-auto mb-8">
                {user && (
                  <Card className="bg-card shadow-sm mb-8">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold">Credit Balance</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{creditBalance}</p>
                        <Button variant="link" asChild className="h-auto p-0 text-sm">
                          <Link href="/pro/buy-credits">Buy more credits</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <form className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search for job titles or categories..."
                    className="h-12 flex-grow text-base bg-card"
                  />
                  <Button type="submit" size="lg" className="h-12">
                    <Search className="mr-2 h-5 w-5 md:hidden" />
                    <span className="hidden md:inline">Search</span>
                  </Button>
                </form>
              </div>

              <div className="space-y-6 max-w-3xl mx-auto">
                {jobRequests.map((job) => {
                  const isClosed = job.quotes >= MAX_QUOTES_ALLOWED;

                  return (
                    <Card key={job.id} className="bg-card hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200">{job.category}</Badge>
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 text-foreground">{job.title}</h2>
                            <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                          </div>
                          <div className="flex-shrink-0 w-full sm:w-56 text-sm space-y-2 text-muted-foreground">
                            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span>Posted {job.posted}</span></div>
                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>Needed: {job.needed}</span></div>
                            <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> <span>{job.quotes} quotes submitted</span></div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          {isClosed ? (
                            <Badge variant="destructive">Job Closed</Badge>
                          ) : (
                            <Button
                              className="w-full sm:w-auto"
                              onClick={() => handleUnlockClick(job)}
                            >
                              <Lock className="mr-2 h-4 w-4" />
                              Unlock & Quote ({job.credits} Credits)
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <QuoteDialog
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  );
}
