
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';

const successStories = [
  {
    name: 'Sarah M.',
    business: 'Interior Designer',
    location: 'Cape Town',
    quote: '“Before Gaupro, finding steady clients was tough. Within weeks of joining, I was getting real leads from verified homeowners. It’s completely changed how I grow my business.”',
    tags: ['interior design', 'Cape Town decorators', 'local business growth'],
    avatarSeed: 'pro-sarah',
  },
  {
    name: 'Themba K.',
    business: 'Electrician',
    location: 'Johannesburg',
    quote: '“I got over 30 new clients through Gaupro in just three months. The review system helps me stand out and gain trust fast.”',
    tags: ['electrician in Johannesburg', 'trusted electrical services', 'home improvement'],
    avatarSeed: 'pro-themba',
  },
  {
    name: 'Lindiwe P.',
    business: 'Mobile Beautician',
    location: 'Durban',
    quote: '“Clients love that they can find and book me easily. Gaupro helped me go from part-time to full-time within 6 months.”',
    tags: ['mobile beauty', 'Durban beautician', 'service business'],
    avatarSeed: 'pro-lindiwe',
  },
];

export default function ProSuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Gaupro Success Stories</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how local professionals across South Africa are growing their businesses through Gaupro. From electricians and plumbers to designers and consultants, Gaupro helps experts reach more clients, build credibility, and manage their reputation online.
            </p>
             <p className="mt-4 text-lg text-muted-foreground">
              Whether you’re a small business owner or an independent pro, Gaupro gives you the tools to showcase your skills, connect with real clients, and grow your brand — all in one powerful platform.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.name} className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Image
                            src={`https://picsum.photos/seed/${story.avatarSeed}/64/64`}
                            alt={`Avatar of ${story.name}`}
                            width={64}
                            height={64}
                            className="rounded-full"
                            data-ai-hint="professional portrait"
                        />
                        <div>
                            <CardTitle className="text-xl">{story.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{story.business} - {story.location}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <blockquote className="italic text-muted-foreground border-l-4 pl-4 mb-6">
                      {story.quote}
                    </blockquote>
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <GrowClientBaseCta />
      </main>
      <Footer />
    </>
  );
}
