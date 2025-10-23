
'use client';

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Search, MapPin } from "lucide-react";
import Image from "next/image";
import { RequestQuoteDialog } from "../request-quote-dialog";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { Autocomplete } from "../ui/autocomplete";
import { allServices } from "@/lib/service-questions";
import { allLocations } from "@/lib/locations";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
  const [serviceValue, setServiceValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

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
           <div className="flex w-full items-center bg-white rounded-md p-2 shadow-lg h-16">
             <Search className="h-5 w-5 text-gray-400 mx-3"/>
             <Autocomplete
                options={allServices}
                value={serviceValue}
                onValueChange={setServiceValue}
                placeholder="What service do you need?"
                inputClassName="text-base text-gray-700"
              />
              <Separator orientation="vertical" className="h-8 mx-2" />
              <MapPin className="h-5 w-5 text-gray-400 mx-3"/>
               <Autocomplete
                options={allLocations}
                value={locationValue}
                onValueChange={setLocationValue}
                placeholder="Durban"
                inputClassName="text-base text-gray-700"
              />
              <RequestQuoteDialog>
                <Button type="submit" size="lg" className="h-full px-8 text-base" variant="destructive">
                  Search
                </Button>
              </RequestQuoteDialog>
           </div>
        </div>
      </div>
    </section>
  );
}
