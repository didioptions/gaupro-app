
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
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

  const handleSearch = () => {
    if (!serviceValue) {
      router.push('/browse-categories');
      return;
    }
    
    const serviceSlug = serviceValue;
    const locationSlug = locationValue;
    
    const href = locationSlug 
      ? `/services/${serviceSlug}?location=${locationSlug}`
      : `/services/${serviceSlug}`;
      
    router.push(href);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg flex items-center p-2 gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Autocomplete
            options={allServices}
            value={serviceValue}
            onValueChange={setServiceValue}
            placeholder="What service do you need?"
            inputClassName="h-12 pl-10 border-0 focus-visible:ring-0 shadow-none text-base text-gray-700 bg-transparent"
          />
        </div>
        <Separator orientation="vertical" className="h-6 bg-gray-300" />
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
           <Autocomplete
            options={allLocations}
            value={locationValue}
            onValueChange={setLocationValue}
            placeholder="e.g. Randburg"
            inputClassName="h-12 pl-10 border-0 focus-visible:ring-0 shadow-none text-base text-gray-700 bg-transparent"
          />
        </div>
        <Button 
          size="lg" 
          className="bg-red-600 hover:bg-red-700 h-12 text-base px-8"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="text-center mt-4">
        <Link href="/how-it-works" className="inline-flex items-center gap-2 text-white hover:underline">
          <PlayCircle className="h-5 w-5" />
          See how it works
        </Link>
      </div>
    </div>
  );
}
