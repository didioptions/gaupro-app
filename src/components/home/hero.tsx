'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Autocomplete } from '@/components/ui/autocomplete';
import { allServices } from '@/lib/service-questions';
import { allLocations } from '@/lib/locations';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
  const [serviceValue, setServiceValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const router = useRouter();

  const handleGetStarted = () => {
    if (serviceValue) {
      const locationQuery = locationValue ? `?location=${locationValue}` : '';
      router.push(`/services/${serviceValue}${locationQuery}`);
    } else {
      router.push('/post-request');
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white py-12 md:py-0">
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
        <p className="mx-auto max-w-2xl text-lg text-white/80 mb-10">
          Get free quotes from qualified, trusted and reviewed professionals in your area.
        </p>
        
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row w-full items-center bg-white rounded-lg p-2 shadow-lg gap-2">
            <div className="bg-white rounded-md p-2 flex-grow w-full text-left">
              <Label htmlFor="service-input" className="text-xs text-muted-foreground">What service do you need?</Label>
              <Autocomplete
                id="service-input"
                options={allServices}
                value={serviceValue}
                onValueChange={setServiceValue}
                placeholder="Eg. plumbing, handyman, etc..."
                inputClassName="h-8 border-0 shadow-none p-0 text-base w-full justify-between text-muted-foreground font-normal"
              />
            </div>
             <div className="bg-white rounded-md p-2 flex-grow w-full text-left">
               <Label htmlFor="location-input" className="text-xs text-muted-foreground">Where?</Label>
               <Autocomplete
                id="location-input"
                options={allLocations}
                value={locationValue}
                onValueChange={setLocationValue}
                placeholder="Enter suburb"
                inputClassName="h-8 border-0 shadow-none p-0 text-base w-full justify-between text-muted-foreground font-normal"
              />
            </div>
            <Button
              size="lg"
              className="w-full md:w-auto px-10 h-14"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
