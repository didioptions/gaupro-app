
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SubscriptionForm from '@/components/blog/subscription-form';
import { useState, useEffect } from 'react';

const blogPosts = [
  {
    title: 'Why 50,000+ South Africans Choose Gaupro Over Traditional Hiring Methods',
    description: 'Discover how Gaupro is transforming the way South Africans find and hire trusted service professionals, making it easier, safer, and more affordable than ever before.',
    href: '/blog/why-choose-gaupro',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Why%2050%2C000%2B%20South%20Africans.jpg?alt=media&token=85b5984d-2221-45a5-9fea-f82a5948cce3',
    imageHint: 'happy customer handshake',
    category: 'Home Advice',
    date: 'October 26, 2023',
    readTime: '8 min read',
  },
  {
    title: 'From Chaos to Confidence',
    description: "Let's be honest about how frustrating finding service professionals used to be. Here's how Gaupro revolutionizes the process.",
    href: '/blog/gaupro-difference',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/The%20Gaupro%20Difference.jpg?alt=media&token=c7d6340f-d1ea-4c96-b65f-fd3d10394099',
    imageHint: 'wedding table setting',
    category: 'Events',
    date: 'November 2, 2023',
    readTime: '5 min read',
  },
   {
    title: 'How Gaupro Works: Your 3-Step Solution to Any Service Need in South Africa [2024 Complete Guide]',
    description: 'A step-by-step guide on how to post a job, receive quotes, and hire professionals with confidence on Gaupro.',
    href: '/blog/how-gaupro-works',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Your%203-Step%20Solution%20%20A.jpg?alt=media&token=883e2a4a-b8bb-4e2a-ac97-5dfe7b4deb5a',
    imageHint: 'steps diagram',
    category: 'Home Advice',
    date: 'November 9, 2023',
    readTime: '6 min read',
  },
  {
    title: 'How Much Do Services Cost in South Africa? Complete 2024 Pricing Guide',
    description: 'Find out how much services cost in South Africa. Plumbers, electricians, movers, painters & more. Updated 2024 prices.',
    href: '/blog/service-costs-south-africa',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/service-costs-guide.jpg?alt=media&token=c2194f4c-d9c0-43e6-a079-05a8a6498b5a',
    imageHint: 'rand calculator',
    category: 'Pricing Guide',
    date: 'November 16, 2023',
    readTime: '15 min read',
  },
  {
    title: 'How to Succeed on Gaupro: Pro Success Strategies',
    description: 'Learn the proven strategies that top-earning professionals on Gaupro use to optimize their profiles, win more jobs, and maximize their income.',
    href: '/blog/how-to-succeed-on-gaupro',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/A%20How%20to%20Succeed%20on%20Gaupro.jpg?alt=media&token=9b0eabae-15b0-4560-b711-2040e36628b5',
    imageHint: 'success chart growth',
    category: 'For Pros',
    date: 'December 5, 2023',
    readTime: '9 min read',
  },
  {
    title: "Why Supporting Local is Key to a Stronger SA Economy",
    description: 'Discover how hiring local service providers through Gaupro boosts the South African economy, creates jobs, and ensures better service.',
    href: '/blog/gaupro-vs-others',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/SA%20G_resized%20(1).jpg?alt=media&token=dc2ce03a-0e20-4b16-b906-3c786da58f3e',
    imageHint: 'diverse professionals team',
    category: 'Analysis',
    date: 'November 23, 2023',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Gaupro Community Blog
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Insights, advice, and stories from South Africa's professional marketplace.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link href={post.href} key={post.title} className="group">
                  <Card className="overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg rounded-lg">
                    <div className="relative aspect-video">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.imageHint}
                      />
                       <Badge className="absolute top-3 left-3">{post.category}</Badge>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="text-sm text-muted-foreground mb-3 flex items-center gap-4">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-2 flex-grow">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.description}
                      </p>
                      <div className="mt-auto">
                        <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-20 bg-secondary/50">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                <h2 className="text-2xl font-bold mb-2">Stay updated with local trends</h2>
                <p className="text-muted-foreground mb-6">Join 12,000+ South Africans receiving our weekly advice for homeowners and pros.</p>
                {isClient && <SubscriptionForm />}
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
