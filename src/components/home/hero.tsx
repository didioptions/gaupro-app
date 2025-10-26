
'use client';

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useState } from "react";
import { Autocomplete } from "../ui/autocomplete";
import { allServices } from "@/lib/service-questions";
import { allLocations } from "@/lib/locations";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
  const [serviceValue, setServiceValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (serviceValue) {
      const locationSlug = locationValue.toLowerCase().replace(/\s+/g, '-');
      const query = locationSlug ? `?location=${locationSlug}` : '';
      router.push(`/services/${serviceValue}${query}`);
    }
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 font-headline">
          Find Trusted Pros for Any Project.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-white/80 mb-10">
          Get free quotes from qualified, trusted and reviewed professionals in your area.
        </p>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row w-full items-center bg-white rounded-lg p-2 shadow-lg gap-2">
            <div className="bg-white rounded-md p-2 flex-grow w-full">
              <Label htmlFor="service-input" className="text-xs text-left block text-muted-foreground">What service do you need?</Label>
              <Autocomplete
                id="service-input"
                options={allServices}
                value={serviceValue}
                onValueChange={setServiceValue}
                placeholder="Eg. plumbing, handyman, etc..."
                inputClassName="text-base text-gray-700 placeholder:text-sm border-0 px-0 h-auto py-1"
              />
            </div>
             <div className="bg-white rounded-md p-2 w-full md:w-auto">
               <Label htmlFor="location-input" className="text-xs text-left block text-muted-foreground">Where?</Label>
               <Autocomplete
                id="location-input"
                options={allLocations}
                value={locationValue}
                onValueChange={setLocationValue}
                placeholder="Enter suburb"
                inputClassName="text-base text-gray-700 placeholder:text-sm border-0 px-0 h-auto py-1"
              />
            </div>
            <Button
              type="button"
              size="lg"
              className="h-12 px-8 text-base w-full md:w-auto"
              onClick={handleSearch}
              disabled={!serviceValue || !locationValue}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
