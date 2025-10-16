'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, DollarSign, Users, Clock, Lock } from 'lucide-react';
import Link from 'next/link';

const jobRequests = [
  {
    category: 'Plumbing',
    location: 'Sandton, Johannesburg',
    title: 'Leaky kitchen sink faucet',
    description: 'The faucet under my kitchen sink has a steady drip. Need a plumber to diagnose and fix the issue. It seems to be coming from the base of the faucet itself.',
    posted: '1 minute ago',
    needed: 'As soon as possible',
    budget: 'R500 - R1000',
    quotes: 2,
    credits: 3,
  },
  {
    category: 'Painting',
    location: 'Rosebank, Johannesburg',
    title: 'Paint interior of 2-bedroom apartment',
    description: 'Looking to repaint the interior walls of a 2-bedroom apartment (living room, two bedrooms). All paint will be supplied. Walls are in good condition, just need a color change.',
    posted: '1 day ago',
    needed: 'In the next few days',
    budget: 'Quote Required',
    quotes: 5,
    credits: 3,
  },
  {
    category: 'Electrical',
    location: 'Germiston, Gauteng',
    title: 'Fix flickering lights in living room',
    description: 'The main ceiling lights in my living room have started flickering. It happens intermittently. Suspecting a wiring issue or a problem with the dimmer switch.',
    posted: '3 days ago',
    needed: 'I\'m flexible',
    budget: 'Quote Required',
    quotes: 1,
    credits: 4,
  },
  {
    category: 'Gardening',
    location: 'Randburg, Johannesburg',
    title: 'Garden clean-up and lawn mowing',
    description: 'My garden is overgrown and needs a major clean-up, including mowing the lawn, weeding the flowerbeds, and trimming the hedges. It\'s a medium-sized garden.',
    posted: '5 days ago',
    needed: 'As soon as possible',
    budget: 'R800 - R1500',
    quotes: 8,
    credits: 2,
  },
  {
    category: 'Building',
    location: 'Pretoria, Gauteng',
    title: 'Build a new boundary wall',
    description: 'I need a new brick boundary wall built on one side of my property. The length is approximately 20 meters. Please include foundation work in the quote.',
    posted: '1 week ago',
    needed: 'Within a month',
    budget: 'R25000 - R40000',
    quotes: 4,
    credits: 5,
  },
  {
    category: 'Cleaning',
    location: 'Cape Town, Western Cape',
    title: 'Deep clean of 3-bedroom house',
    description: 'End-of-lease deep cleaning required for a 3-bedroom, 2-bathroom house. Includes oven, windows, and carpets. Must be completed by the end of the week.',
    posted: '1 week ago',
    needed: 'By this weekend',
    budget: 'R1500 - R2500',
    quotes: 11,
    credits: 2,
  },
  {
    category: 'Handyman',
    location: 'Durban, KwaZulu-Natal',
    title: 'Hang pictures and assemble flat-pack furniture',
    description: 'I have 5 large pictures to hang on various walls and a new bookshelf from a flat-pack that needs to be assembled. Need someone with their own tools.',
    posted: '2 weeks ago',
    needed: 'I\'m flexible',
    budget: 'R400 - R700',
    quotes: 3,
    credits: 1,
  },
];

export default function BrowseQuotesPage() {
  return (
    <div className="bg-secondary/50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Job Requests</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse the latest opportunities from customers in your area. Unlock leads to get contact details and submit your quote.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <form className="flex gap-2">
              <Input
                type="search"
                placeholder="Search for job titles or categories..."
                className="h-12 flex-grow text-base"
              />
              <Button type="submit" size="lg" className="h-12">
                <Search className="mr-2 h-5 w-5 md:hidden" />
                <span className="hidden md:inline">Search</span>
              </Button>
            </form>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {jobRequests.map((job, index) => (
                <Card key={index} className="bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200">{job.category}</Badge>
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{job.title}</h2>
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
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                            <Lock className="mr-2 h-4 w-4" />
                            Unlock & Quote ({job.credits} Credits)
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <aside className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Sign up to start quoting</CardTitle>
                  <CardDescription>Join HandyConnect to unlock these job leads and grow your business.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/pro/signup">Sign Up as a Pro</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-card">
                 <CardHeader>
                  <CardTitle>Are you a customer?</CardTitle>
                  <CardDescription>Looking to hire a pro for your next project?</CardDescription>
                </CardHeader>
                <CardContent>
                   <Button asChild variant="outline" className="w-full">
                    <Link href="/post-request">Post a Job for Free</Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
