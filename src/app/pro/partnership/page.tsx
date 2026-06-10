'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BadgeCheck, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProPartnershipPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'verified-badge-card');
  
  return (
    <main className="flex-grow bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <BadgeCheck className="h-16 w-16 mx-auto mb-6 text-accent animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            You’re Invited: Join GauPro as a Verified Pro
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            We’re expanding our network and inviting top-rated businesses in your area to partner with South Africa’s fastest-growing service marketplace.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">A Trusted Partnership</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  GauPro is a dedicated South African platform designed to connect high-quality local professionals with customers who are ready to hire. We’ve identified your business as a top performer, and we’d love to have you on board.
                </p>
              </div>
              
              <ul className="space-y-5">
                {[
                  "Free professional profile to showcase your best work",
                  "Direct access to new customer leads in your area",
                  "Build a digital reputation with verified reviews",
                  "Increased online visibility through our SEO network",
                  "No monthly fees - pay only for the leads you want"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Card className="bg-accent/10 border-accent/30 border-2 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ShieldCheck className="h-10 w-10 text-accent" />
                    <h3 className="text-xl font-bold">Complimentary Verified Pro Status</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    As an early partner, we are offering you **complimentary Verified Pro status**. This includes identity and credential verification at no cost, helping you build immediate trust with new clients.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="GauPro Verified Partner"
                  fill
                  className="object-cover"
                  data-ai-hint="verified business"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div className="bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg w-full">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                    <Star className="h-5 w-5 fill-current" />
                    <span>Premium Partner Spotlight</span>
                  </div>
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "GauPro has streamlined our lead acquisition. The Verified Pro status immediately set us apart from competitors, and we've seen a 300% increase in inquiries since joining."
                  </p>
                  <p className="text-xs font-bold mt-3 uppercase tracking-wider text-muted-foreground">— Platinum Service Partner, Sandton</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary/30 text-center border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accept Your Invitation</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Activation is free and takes less than 5 minutes. Secure your area before your competitors do.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="h-16 px-12 text-2xl font-bold bg-red-600 hover:bg-red-700 shadow-2xl transform hover:scale-105 transition-all">
              <Link href="/pro/register">Activate My Free Profile</Link>
            </Button>
            <p className="text-sm text-muted-foreground italic">No credit card required. No obligation.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
