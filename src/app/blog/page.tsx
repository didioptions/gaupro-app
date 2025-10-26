
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';

const blogPosts = [
  {
    title: 'Why 50,000+ South Africans Choose Gaupro Over Traditional Hiring Methods',
    description: 'Discover how Gaupro is transforming the way South Africans find and hire trusted service professionals, making it easier, safer, and more affordable than ever before.',
    href: '/blog/why-choose-gaupro',
    imageUrl: 'https://picsum.photos/seed/blog-intro/800/400',
    imageHint: 'happy customer handshake',
    date: 'October 26, 2023',
    readTime: '8 min read',
  },
  {
    title: 'The Gaupro Difference: Traditional Hiring vs Smart Hiring',
    description: "Let's be honest about how frustrating finding service professionals used to be. Here's how Gaupro revolutionizes the process.",
    href: '/blog/gaupro-difference',
    imageUrl: 'https://picsum.photos/seed/blog-difference/800/400',
    imageHint: 'man thinking frustrated',
    date: 'November 2, 2023',
    readTime: '5 min read',
  },
  {
    title: 'How Gaupro Works: Your 3-Step Solution to Any Service Need',
    description: 'A step-by-step guide on how to post a job, receive quotes, and hire professionals with confidence on Gaupro.',
    href: '/blog/how-gaupro-works',
    imageUrl: 'https://picsum.photos/seed/blog-how-it-works/800/400',
    imageHint: 'steps diagram',
    date: 'November 9, 2023',
    readTime: '6 min read',
  },
  {
    title: 'Why 15,000+ Professionals Choose Gaupro to Grow Their Business',
    description: 'For Service Professionals, Gaupro is a Business Game-Changer. Learn how we help you get quality leads, build your reputation, and grow your income.',
    href: '/blog/why-professionals-love-gaupro',
    imageUrl: 'https://picsum.photos/seed/blog-pro-love/800/400',
    imageHint: 'professional working happy',
    date: 'November 16, 2023',
    readTime: '7 min read',
  },
  {
    title: 'How to Succeed on Gaupro: Professional Success Strategies',
    description: 'Learn the proven strategies that top-earning professionals on Gaupro use to optimize their profiles, win more jobs, and maximize their income.',
    href: '/blog/how-to-succeed-on-gaupro',
    imageUrl: 'https://picsum.photos/seed/blog-success/800/400',
    imageHint: 'success chart growth',
    date: 'December 5, 2023',
    readTime: '9 min read',
  },
  {
    title: "Gaupro vs Other Options: Why We're South Africa's #1 Choice",
    description: 'A comprehensive comparison of Gaupro against traditional methods like Facebook, Gumtree, and Google search.',
    href: '/blog/gaupro-vs-others',
    imageUrl: 'https://picsum.photos/seed/blog-comparison/800/400',
    imageHint: 'comparison chart',
    date: 'November 23, 2023',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">Gaupro Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories on finding the best service professionals and growing your business in South Africa.
            </p>
          </header>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Link href={post.href} key={post.title} className="group">
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                   <div className="p-6">
                     <div className="relative aspect-video mb-6">
                        <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint={post.imageHint}
                        />
                    </div>
                    <CardHeader className="p-0">
                      <div className="text-sm text-muted-foreground mb-2">
                        <span>{post.date}</span> &middot; <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <CardDescription>{post.description}</CardDescription>
                    </CardContent>
                    <div className="mt-6">
                       <Button variant="link" className="p-0 h-auto text-base">
                          Read more <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <GrowClientBaseCta />
      </main>
      <Footer />
    </>
  );
}
