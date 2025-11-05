
'use client';

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import HomepageQuoteForm from "./homepage-quote-form";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
  
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white py-20 md:py-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 font-headline">
          Find Trusted Pros for Any Project.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-white/90 mb-10">
          Welcome to Gaupro, South Africa’s #1 marketplace for home services and repairs. Instantly connect with local builders, electricians, cleaners, plumbers, and more. Compare prices, read verified reviews, and hire trusted experts in your area — fast, easy, and secure. Get the job done right with Gaupro today
        </p>
        
        <HomepageQuoteForm />

      </div>
    </section>
  );
}
