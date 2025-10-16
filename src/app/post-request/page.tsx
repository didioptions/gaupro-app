'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Pencil, Tags, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: 'Free to use',
    description: "You never pay to use Gaupro. Just tell us what you need done and we'll get you free quotes.",
  },
  {
    icon: <Tags className="h-8 w-8 text-primary" />,
    title: 'Get free estimates',
    description: "You'll get multiple quotes and know how much your project costs even before hiring a pro.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Hire with confidence',
    description: "See their reviews, photos and work history. When you've got all the info, hire the right pro.",
  },
];

export default function PostRequestPage() {
  return (
    <div className="bg-secondary/50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Give us a few details and we’ll match you with the right professional.
          </p>

          <Card className="max-w-2xl mx-auto text-left shadow-lg">
            <CardContent className="p-6">
              <form className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="What service do you need? e.g. Plumber"
                  className="h-12 text-base flex-grow"
                  aria-label="Service needed"
                />
                <Button type="submit" size="lg" className="h-12 px-8 text-base">
                  Get Started
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why hire Trusted Professionals on Gaupro for just about any project
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
