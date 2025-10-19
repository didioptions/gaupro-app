
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
                Why 50,000+ South Africans Choose Gaupro Over Traditional Hiring Methods
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-2xl mx-auto prose lg:prose-lg">
                <p className="lead">
                    Remember the last time you needed a plumber urgently? The frantic Google searches, endless phone calls, waiting for callbacks that never came, and the anxiety of not knowing if you're being overcharged? That's exactly why we created Gaupro.
                </p>
                <p>
                    Gaupro is transforming how South Africans find and hire service professionals. Whether you need an emergency electrician in Johannesburg, a reliable builder in Cape Town, or a skilled web developer in Durban, Gaupro connects you with verified professionals in minutes, not days.
                </p>

                <Card className="my-8 bg-blue-50 border-blue-200">
                    <CardContent className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="font-bold text-sm text-muted-foreground">TIME TO HIRE</p>
                                <p><span className="font-bold">Before Gaupro:</span> 6-8 hours</p>
                                <p><span className="font-bold">With Gaupro:</span> Under 2 hours</p>
                            </div>
                             <div>
                                <p className="font-bold text-sm text-muted-foreground">SUCCESS RATE</p>
                                <p className="text-3xl font-bold text-primary">94%</p>
                                <p>of projects completed</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-sm text-muted-foreground">TRUST FACTOR</p>
                            <p className="text-lg font-semibold">100% of professionals on Gaupro are ID-verified and vetted</p>
                        </div>
                    </CardContent>
                </Card>

                <p>This comprehensive guide shows you exactly how Gaupro makes hiring professionals easier, safer, and more affordable than ever before.</p>

                <Card className="my-8">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mt-0">Table of Contents</h2>
                        <ul className="space-y-2">
                            <li><a href="#gaupro-difference">The Gaupro Difference: Traditional Hiring vs Smart Hiring</a></li>
                            <li><a href="#how-it-works">How Gaupro Works: Your 3-Step Solution</a></li>
                            <li><a href="#for-professionals">Why Professionals Love Gaupro</a></li>
                            <li><a href="#success-stories">Real Success Stories from Gaupro Users</a></li>
                            <li><a href="#verification">Gaupro's Verification Process: Your Safety First</a></li>
                            <li><a href="#pricing">Pricing Transparency with Gaupro</a></li>
                            <li><a href="#locations">City-by-City: Gaupro Across South Africa</a></li>
                            <li><a href="#comparison">Gaupro vs Other Platforms</a></li>
                            <li><a href="#getting-started">Getting Started with Gaupro</a></li>
                            <li><a href="#faq">Frequently Asked Questions</a></li>
                        </ul>
                    </CardContent>
                </Card>

                 <section id="gaupro-difference" className="space-y-4">
                    <h2 className="text-2xl font-bold">1. The Gaupro Difference: Traditional Hiring vs Smart Hiring</h2>
                    
                    <h3 className="text-xl font-semibold">The Old Way (Without Gaupro) 😓</h3>
                    <p>Let's be honest about how frustrating finding service professionals used to be:</p>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-bold text-red-800">The Traditional Struggle:</h4>
                        <ul className="list-disc list-inside space-y-2 text-red-700">
                            <li>❌ Hours of searching through classifieds and Facebook groups</li>
                            <li>❌ No verification - anyone can claim they're qualified</li>
                            <li>❌ Price mystery - quotes vary wildly with no transparency</li>
                            <li>❌ Zero accountability - no reviews, no recourse</li>
                            <li>❌ Safety concerns - inviting strangers with no background checks</li>
                            <li>❌ Time wasted - waiting days for callbacks</li>
                            <li>❌ Geographic limitations - only knowing professionals in your immediate area</li>
                        </ul>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "I once spent an entire week trying to find an electrician. Made 15 calls, got 3 callbacks, 1 showed up, and the quote was ridiculous. Never again!"
                        <cite className="block not-italic font-semibold mt-2">- Sarah from Sandton</cite>
                    </blockquote>
                </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
