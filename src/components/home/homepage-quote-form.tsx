'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search, MapPin, PlayCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { allServices } from '@/lib/service-questions';
import { Autocomplete } from '../ui/autocomplete';
import { allLocations } from '@/lib/locations';

export default function HomepageQuoteForm() {
  const [serviceValue, setServiceValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Use the values from state. Autocomplete component is expected to sync with these.
    if (!serviceValue) {
      router.push('/browse-categories');
      return;
    }
    
    const serviceSlug = serviceValue;
    const locationSlug = locationValue;
    
    let href = `/services/${serviceSlug}`;
    if (locationSlug) {
        href += `?location=${locationSlug}`;
    }
      
    router.push(href);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center p-2 gap-2">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Autocomplete
            options={allServices}
            value={serviceValue}
            onValueChange={setServiceValue}
            placeholder="What service do you need?"
            inputClassName="h-12 pl-10 border-0 focus-visible:ring-0 shadow-none text-base text-gray-700 bg-transparent w-full"
          />
        </div>
        <Separator orientation="vertical" className="hidden md:block h-6 bg-gray-300" />
        <div className="relative flex-grow w-full">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
           <Autocomplete
            options={allLocations}
            value={locationValue}
            onValueChange={setLocationValue}
            placeholder="e.g. Randburg"
            inputClassName="h-12 pl-10 border-0 focus-visible:ring-0 shadow-none text-base text-gray-700 bg-transparent w-full"
          />
        </div>
        <Button 
          type="submit"
          size="lg" 
          className="bg-red-600 hover:bg-red-700 h-12 text-base px-8 w-full md:w-auto"
        >
          Search
        </Button>
      </form>
      <div className="text-center mt-4">
        <Link href="/how-it-works" className="inline-flex items-center gap-2 text-white hover:underline">
          <PlayCircle className="h-5 w-5" />
          See how it works
        </Link>
      </div>
    </div>
  );
}
