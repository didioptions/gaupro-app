'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, CreditCard, Smile, FileText, HelpCircle, Tag, Paperclip } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const steps = [
  {
    icon: <Paperclip className="h-8 w-8 text-primary" />,
    title: 'Get customer requests',
    description: "Sign up for free to receive quote requests from customers looking for your service.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Pay to send a quote',
    description: 'When a quote request matches your interest and availability, pay to respond to the customer.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Get hired',
    description: "If you're a good fit for the customer, you get hired. Complete the job and request a review from the customer.",
  },
];

const bottomLinks = [
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: 'See an example lead',
        href: '#'
    },
    {
        icon: <HelpCircle className="h-8 w-8 text-primary" />,
        title: 'How it works',
        href: '#'
    },
    {
        icon: <Tag className="h-8 w-8 text-primary" />,
        title: 'Pricing',
        href: '#'
    }
]

export default function ProSignupPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
             Gaupro empowers service providers across South Africa to expand their reach and connect with a wider client base.
          </h1>
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/pro/register">Create Free Account</Link>
          </Button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Links Section */}
       <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {bottomLinks.map((link, index) => (
                <Link href={link.href} key={index} className="group">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                             {link.icon}
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{link.title}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </main>
      <Footer />
      </>
  );
}
