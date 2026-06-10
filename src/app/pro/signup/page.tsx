'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Phone, ShieldCheck, Zap, TrendingUp, Clock, DollarSign, UserPlus, CheckCircle, MessageSquare, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const whyJoinItems = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Get Real Customer Leads',
    description: "Receive genuine job requests from customers looking for trusted professionals in your area. Stop spending hours searching for work and let customers come to you.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Grow Your Business Faster',
    description: "Build your online presence, showcase your services, collect customer reviews, and stand out from competitors.",
  },
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: 'Receive Job Requests Instantly',
    description: "Get notified by email, SMS, and through your Gaupro dashboard whenever a customer requests a quote for services you provide.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Work on Your Terms',
    description: "Choose which jobs to quote on, set your own prices, define your service areas, and decide when you want to work.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'No Monthly Subscription Fees',
    description: "Creating a profile is free. Only pay when you choose to connect with customers and unlock lead details.",
  },
];

const howItWorksSteps = [
    {
        step: 1,
        title: "Create Your Business Profile",
        description: "Add your business information, services, photos, experience, and service areas."
    },
    {
        step: 2,
        title: "Get Matched with Customers",
        description: "Our platform connects you with people looking for professionals in your category and location."
    },
    {
        step: 3,
        title: "Send Quotes and Win Jobs",
        description: "Respond quickly to customer requests, provide competitive quotes, and secure new work."
    },
    {
        step: 4,
        title: "Build Reviews and Trust",
        description: "Complete jobs successfully and collect reviews from satisfied customers to grow your reputation."
    }
]

const proCategories = [
    { 
        name: "Home Services", 
        description: "Plumbers, electricians, builders, painters, cleaners, handymen, tilers, gardeners, pool builders and contractors." 
    },
    { 
        name: "Construction & Property", 
        description: "Demolition contractors, rubble removal companies, roofing specialists, paving contractors and renovation experts." 
    },
    { 
        name: "Business Services", 
        description: "Accountants, web designers, marketers, consultants and IT professionals." 
    },
    { 
        name: "Events & Lifestyle", 
        description: "Photographers, DJs, caterers, decorators, tutors, trainers and wellness professionals." 
    }
]

const faqs = [
    {
        q: "How much does it cost to join Gaupro?",
        a: "It is completely free to create a business profile and list your services on Gaupro. We don't charge any monthly subscription or registration fees. You only pay a small amount of credits when you decide to respond to a specific job request and view a customer's contact details."
    },
    {
        q: "How do I get leads in my area?",
        a: "When you set up your profile, you specify the service categories you cover and your working radius (e.g., 50km from Sandton). Whenever a customer posts a job that matches your skills and location, we send you an instant notification via email or SMS."
    },
    {
        q: "How many professionals can quote on one job?",
        a: "To ensure a fair marketplace and prevent spam for the customer, we typically limit the number of professionals who can unlock a lead to a maximum of 5. This increases your chances of winning the work compared to open bidding sites."
    },
    {
        q: "Are the reviews on Gaupro verified?",
        a: "Yes. Our system ensures that only customers who have interacted with you through the platform can leave a review. We also have a manual moderation team that monitors for any suspicious activity to maintain a high level of trust in our community."
    },
    {
        q: "Do I have to pay Gaupro a commission when I win a job?",
        a: "No. Gaupro is a connection platform, not a payment processor. You negotiate your rates directly with the customer and they pay you 100% of the agreed amount. We never take a percentage of your hard-earned income."
    }
];

export default function ProSignupPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'pro-signup-hero');
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="flex-grow bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Join Gaupro as a Service Professional and Get More Customers
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
             “Gaupro helps service providers across South Africa grow their business by connecting them with more clients and new local opportunities.”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="px-10 py-7 text-xl font-bold">
              <Link href="/pro/register">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-normal mb-6">Empowering South African Small Businesses</h2>
              <p className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
                  Whether you're a plumber, electrician, builder, cleaner, tutor, photographer, web designer, landscaper, or contractor, Gaupro helps you find new clients, receive quote requests, and build your reputation online. We bridge the gap between skilled experts and customers who are ready to hire right now.
              </p>
          </div>
      </section>

      {/* Why Join Gaupro Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">Why Join Gaupro?</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {whyJoinItems.map(item => (
                      <Card key={item.title} className="border-0 shadow-md hover:shadow-xl transition-shadow bg-card">
                          <CardContent className="p-8">
                              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                                  {item.icon}
                              </div>
                              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          </CardContent>
                      </Card>
                  ))}
                  <Card className="border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 bg-primary/5 text-center">
                      <TrendingUp className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-2">Ready to Scale?</h3>
                      <p className="text-sm text-muted-foreground mb-6">Join 15,000+ pros winning work every day.</p>
                      <Button asChild>
                          <Link href="/pro/register">Join Now</Link>
                      </Button>
                  </Card>
              </div>
          </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">How Gaupro Works</h2>
                  <p className="mt-4 text-muted-foreground">Four simple steps to consistent growth.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto relative">
                  {/* Visual connector line for desktop */}
                  <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 z-0"></div>
                  
                  {howItWorksSteps.map(step => (
                      <div key={step.step} className="flex flex-col items-center text-center relative z-10">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-6 shadow-lg">
                              {step.step}
                          </div>
                          <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Who Uses Section */}
      <section className="py-20">
          <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">Professionals Who Use Gaupro</h2>
                  <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                      Our marketplace is built for experts across all major service industries in South Africa.
                  </p>
              </div>

              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {proCategories.map(cat => (
                      <Card key={cat.name} className="h-full border hover:border-primary/50 transition-colors">
                          <CardHeader>
                              <CardTitle className="text-lg flex items-center gap-2">
                                  <BadgeCheck className="h-5 w-5 text-primary" />
                                  {cat.name}
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>

              {heroImage && (
                  <div className="relative h-96 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                      <Image
                          src={heroImage.imageUrl}
                          alt="South African professionals at work"
                          fill
                          className="object-cover"
                          data-ai-hint="south african workers"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                          <p className="text-white text-xl font-semibold italic">"Gaupro changed the way I find clients. I now focus on my work while the leads come to me."</p>
                      </div>
                  </div>
              )}
          </div>
      </section>
      
      {/* Trade-Specific SEO Content Section */}
      <section className="py-20 bg-secondary/20 border-y">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center">How Gaupro Helps Local Trades & Services Thrive</h2>
              <div className="prose prose-blue max-w-none text-muted-foreground leading-relaxed space-y-6">
                  <p>
                      In the competitive South African market, visibility is everything. For <strong>plumbers and electricians</strong>, Gaupro provides a steady stream of emergency and maintenance leads that bypass the need for expensive traditional advertising. Instead of competing on crowded social media groups, our platform filters high-intent customers specifically in your service area, allowing you to respond to "geyser repair in Sandton" or "electrical compliance certificates in Cape Town" within minutes.
                  </p>
                  <p>
                      For <strong>builders and renovation contractors</strong>, Gaupro acts as a digital portfolio and lead engine. Large-scale projects like kitchen remodels or home extensions require a high degree of trust. By showcasing your verified "Pro Verified" badge and accumulating authentic reviews, you build a digital reputation that wins over high-value clients. Our system connects you with homeowners who are already at the decision-making stage, significantly shortening your sales cycle.
                  </p>
                  <p>
                      <strong>Cleaning companies and rubble removal services</strong> benefit from our high-volume request system. These services often rely on repeat business and local density. Gaupro allows you to set specific working zones, ensuring your teams spend less time traveling and more time on-site. Whether you specialize in "end-of-lease deep cleaning" or "industrial waste removal," our category-specific filters ensure you only see leads that fit your equipment and crew size.
                  </p>
                  <p>
                      Creative professionals like <strong>photographers, tutors, and web designers</strong> use Gaupro to reach clients outside their immediate personal networks. The platform's ability to handle specific project requirements means a photographer can find a "wedding shoot in Durban" while a tutor can connect with a student needing "Grade 12 Maths help in Pretoria." By removing the friction of finding new business, Gaupro empowers South Africa's freelance economy to grow sustainably.
                  </p>
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground mt-2">Everything you need to know about growing with Gaupro.</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.a}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4">Join Thousands of South African Professionals</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Create your free Gaupro profile today and start receiving customer leads from people looking for trusted service providers near them.
              </p>
              <div className="space-y-4">
                  <Button asChild size="lg" variant="secondary" className="px-12 py-8 text-2xl font-bold shadow-2xl hover:scale-105 transition-transform">
                      <Link href="/pro/register">Join Now - It's Free</Link>
                  </Button>
                  <p className="text-sm opacity-70">🔒 No credit card required. No monthly fees.</p>
              </div>
          </div>
      </section>
    </main>
  );
}
