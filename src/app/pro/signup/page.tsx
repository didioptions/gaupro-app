'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whyJoinItems = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Get Genuine Leads',
    description: "We connect you directly with people looking for your services — no cold calling or endless marketing needed.",
    imageId: "pro-handshake-icon"
  },
  {
    icon: <Phone className="h-10 w-10 text-primary" />,
    title: 'Get Job Requests on Your Phone',
    description: "Receive quote requests instantly via SMS, email, or in your Gaupro dashboard so you never miss an opportunity.",
    imageId: "pro-phone-icon"
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: 'Build Trust and Stand Out',
    description: "Showcase your best work, collect reviews from happy customers, and grow your professional reputation.",
    imageId: "pro-star-icon"
  },
];

const howItWorksSteps = [
    {
        step: 1,
        title: "Create Your Gaupro Profile",
        description: "Tell us about your business, services, and service area."
    },
    {
        step: 2,
        title: "Get Matched with Customers",
        description: "We’ll send you requests from people who need what you offer."
    },
    {
        step: 3,
        title: "Send Your Quote",
        description: "Respond quickly, chat with customers, and secure the job."
    },
    {
        step: 4,
        title: "Earn Reviews and Grow",
        description: "Deliver great service, get rated, and attract more work."
    }
]

const proCategories = [
    { name: "Home Services", description: "Plumbers, electricians, painters, cleaners" },
    { name: "Events", description: "Photographers, DJs, caterers, decorators" },
    { name: "Business Services", description: "Web designers, accountants, marketers" },
    { name: "Lessons & Wellness", description: "Trainers, tutors, therapists, coaches" }
]

const categoryImages = [
    "pro-plumber-grid",
    "pro-dj-grid",
    "pro-designer-grid",
    "pro-trainer-grid"
]

export default function ProSignupPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'pro-signup-hero');
  const finalCtaImage = PlaceHolderImages.find(p => p.id === 'pro-celebration');

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* New Hero Section */}
      <section className="bg-background py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-normal mb-4 max-w-3xl mx-auto">
            “Gaupro helps service providers across South Africa grow their business by connecting them with more clients and new local opportunities.”
          </h1>
          <div className="mt-8">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/pro/register">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-normal mb-4">🧰 Join as a Pro — Grow Your Business with Gaupro</h2>
              <p className="text-lg text-foreground mb-6">Get more customers. Save time. Build your reputation.</p>
              <p className="max-w-3xl mx-auto text-foreground">
                  Thousands of people use Gaupro every day to find trusted local professionals — from electricians and plumbers to tutors, photographers, and more.
Join free today and start receiving real leads from customers who are ready to hire.
              </p>
              {heroImage && (
                  <div className="relative h-96 w-full max-w-5xl mx-auto mt-12 rounded-lg overflow-hidden shadow-lg">
                      <Image
                          src={heroImage.imageUrl}
                          alt={heroImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={heroImage.imageHint}
                      />
                  </div>
              )}
          </div>
      </section>

      {/* Why Join Gaupro Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-normal">💡 Why Join Gaupro?</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {whyJoinItems.map(item => {
                        const itemImage = PlaceHolderImages.find(p => p.id === item.imageId);
                        return (
                          <Card key={item.title} className="text-center p-6 border-0 shadow-none">
                              <CardContent className="p-0">
                                    <div className="flex justify-center mb-4">
                                      {itemImage ? (
                                            <div className="relative h-24 w-24">
                                              <Image
                                                  src={itemImage.imageUrl}
                                                  alt={itemImage.description}
                                                  fill
                                                  className="object-cover rounded-full"
                                                  data-ai-hint={itemImage.imageHint}
                                              />
                                          </div>
                                      ) : item.icon}
                                  </div>
                                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                  <p className="text-foreground">{item.description}</p>
                              </CardContent>
                          </Card>
                        )
                  })}
              </div>
              <div className="text-center mt-8">
                    <p className="font-semibold text-foreground">You’re in control: Choose the leads you want, set your own prices, and work when it suits you.</p>
                    <p className="text-foreground">No monthly fees — only pay when you choose to connect with a customer.</p>
              </div>
          </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-normal">⚙️ How Gaupro Works</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {howItWorksSteps.map(step => (
                      <div key={step.step} className="flex flex-col items-center text-center">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                              {step.step}
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-sm text-foreground">{step.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-normal">👷‍♀️ Who Can Join Gaupro</h2>
                  <p className="max-w-2xl mx-auto mt-4 text-foreground">
                      Gaupro is built for professionals across all industries — whether you’re a solo expert, small business, or growing team.
                  </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                  {proCategories.map(cat => (
                      <Card key={cat.name} className="p-6">
                          <h3 className="font-bold text-lg">{cat.name}</h3>
                          <p className="text-foreground">{cat.description}</p>
                      </Card>
                  ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categoryImages.map(id => {
                      const image = PlaceHolderImages.find(p => p.id === id);
                      return image ? (
                            <div key={id} className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                              <Image
                                  src={image.imageUrl}
                                  alt={image.description}
                                  fill
                                  className="object-cover"
                                  data-ai-hint={image.imageHint}
                              />
                            </div>
                      ) : null
                  })}
              </div>
          </div>
      </section>
      
      {/* Join in Minutes Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-normal mb-4">🚀 Join Gaupro Free in Minutes</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-semibold my-8">
                  <span>Step 1: Click Join as a Pro</span>
                  <span className="text-primary">&rarr;</span>
                  <span>Step 2: Create your profile</span>
                    <span className="text-primary">&rarr;</span>
                  <span>Step 3: Start receiving leads!</span>
              </div>
              <p className="font-semibold mb-8">🔒 No subscription needed. Only pay when you connect with a customer.</p>
              {finalCtaImage && (
                  <div className="relative h-80 w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mb-8">
                      <Image
                          src={finalCtaImage.imageUrl}
                          alt={finalCtaImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={finalCtaImage.imageHint}
                      />
                  </div>
              )}
                <div className="mt-8">
                  <h3 className="text-2xl font-normal mb-2">✅ Ready to Get Started?</h3>
                  <p className="mb-6 text-foreground">Start growing your business today with Gaupro.</p>
                  <Button asChild size="lg" className="px-10 py-7 text-xl">
                      <Link href="/pro/register">Join as a Pro</Link>
                  </Button>
              </div>
          </div>
      </section>
    </main>
  );
}
