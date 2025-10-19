
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
  // Future blog posts can be added here
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-secondary/50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Gaupro Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories on finding the best service professionals and growing your business in South Africa.
            </p>
          </header>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link href={post.href} key={post.title} className="group">
                <Card className="overflow-hidden transition-shadow hover:shadow-lg grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <CardHeader className="p-0">
                      <div className="text-sm text-muted-foreground mb-2">
                        <span>{post.date}</span> &middot; <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex-grow">
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
      </main>
      <Footer />
    </>
  );
}
