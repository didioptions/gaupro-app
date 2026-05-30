'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { allLocations } from '@/lib/locations';
import { Autocomplete } from '@/components/ui/autocomplete';

const allCategories = [
  { category: 'Home, Building & Gardening', services: ['Air Conditioning', 'Aluminium Doors And Windows', 'Awnings', 'Balustrades', 'Bathroom Renovations', 'Blinds', 'Builders', 'Building Materials', 'Burglar Bars', 'Carpenters', 'Carpeting', 'Carpet Cleaning', 'Carports', 'Ceiling Installers', 'Cleaning Services', 'Concrete Slabs', 'Curtains', 'Demolition', 'Doors', 'Drywalls', 'Electricians', 'Electric Fencing', 'Fencing', 'Flooring', 'Fridge Repairs', 'Garage Doors', 'Garage Door Motors', 'Gardeners', 'Gas Installers', 'Gas Suppliers', 'Gates', 'Gate Motors', 'Glass Works', 'Guttering', 'Handymen', 'High Pressure Cleaning', 'Home Improvements', 'Interior Designing', 'Irrigation', 'Kitchen Renovations', 'Laminate Flooring', 'Landscaping', 'Laundry Services', 'Locksmiths', 'Office Cleaning', 'Painters', 'Palisade Fencing', 'Paving', 'Pest Control', 'Plastering', 'Plumbers', 'Pool Cleaning', 'Precast Fencing', 'Prepaid Electricity Meters', 'Roofing', 'Rubble Removals', 'Security Gates', 'Shadeports', 'Shower Doors', 'Skip Hire', 'Solar Geysers', 'Solar Systems', 'Swimming Pool Builders', 'Swimming Pool Supplies', 'Tar Surfacing', 'Thatched Roofing', 'Tiling', 'Tree Felling', 'Tv Repairs', 'Upholsterers', 'Upholstery Cleaning', 'Waterproofing', 'Welders', 'Wendy Houses', 'Window Cleaning', 'Window Tinting', 'Wire Mesh Fencing', 'Wooden Decking'] },
  { category: 'Weddings, Events & Entertainment', services: ['Djs', 'Event Decorations', 'Event Planners', 'Florists', 'Jumping Castle Hire', 'Party Planners', 'Photographers', 'Tent Hire', 'Toilet Hire', 'Videographers', 'Wedding Photographers', 'Venues', 'Wedding Venues'] },
  { category: 'Business & Finance', services: ['Accounting', 'Auditors', 'Business Consultants', 'Company Registrations', 'Debt Collection', 'Debt Counsellors', 'Financial Advisors', 'Insurance', 'Loans', 'Medical Aid', 'Recruitment Agencies', 'Stationery'] },
  { category: 'Digital Design, Media & Marketing', services: ['Graphic Designers', 'Logo Design', 'Printing', 'Signs', 'Website Designers'] },
  { category: 'Health, Wellness & Beauty', services: ['Beauty Salons', 'Chiropractors', 'Counsellors', 'Dentists', 'Dermatologists', 'Dieticians', 'Gynaecologists', 'Hair Stylists', 'Laser Clinics', 'Make Up Artists', 'Marriage Counsellors', 'Massage Therapists', 'Personal Trainers', 'Physiotherapists', 'Plastic Surgeons', 'Psychologists'] },
  { category: 'Alarms & Security', services: ['Access Control', 'Alarm Systems', 'Armed Response', 'Car Alarms', 'Car Tracking', 'Cctv', 'Fire Safety', 'Private Investigators', 'Security', 'Security Training', 'Tracing'] },
  { category: 'Cars & Automotive', services: ['Auto Electricians', 'Auto Glass', 'Batteries', 'Brakes and Clutches', 'Car Aircon Regassing', 'Car Window Tinting', 'Engine Overhauls', 'Fuels', 'Gearboxes', 'Mechanics', 'Panel Beaters', 'Towing', 'Tow Bars'] },
  { category: 'Lessons & Training', services: ['Computer Courses', 'Driving Schools', 'Firearm Training', 'First Aid', 'Forklift Training', 'Life Coaches', 'Swimming Lessons', 'Team Building'] },
  { category: 'Accommodation', services: ['Holiday Accommodation'] },
  { category: 'Home Appliances & Equipment', services: ['Appliance Repairs', 'Dstv Installers', 'Tv Installers'] },
  { category: 'Property & Legal', services: ['Conveyancers', 'Divorce Lawyers', 'Estate Agents', 'Labour Lawyers', 'Lawyers'] },
  { category: 'Transportation & Logistics', services: ['Couriers', 'Movers', 'School Transport', 'Shuttle Services', 'Taxis', 'Transportation'] },
  { category: 'Computers & Telecommunications', services: ['Cellphone Repairs', 'Computer Repairs', 'Internet Solutions', 'Laptop Repairs', 'Networking', 'Office Equipment'] },
  { category: 'Heavy Equipment & Machinery', services: ['Generators', 'Plant Hire', 'Tlb Hire'] },
  { category: 'Agricultural', services: ['Agricultural Equipment', 'Agricultural Services'] },
  { category: 'Architecture & Engineering', services: ['Architects', 'Borehole Drillers', 'Town Planners'] },
  { category: 'Family Care', services: ['Baby Sitters', 'Creches', 'Day Care Centres', 'Family Care', 'Pre-Schools'] },
  { category: 'Fashion, Tailors & Outfitters', services: ['Dressmakers', 'Embroidery', 'Fashion', 'Fashion Accessories', 'Fashion Shoes'] },
  { category: 'Food & Beverage', services: ['Cake Shops', 'Caterers'] },
  { category: 'Pets', services: ['Groomers', 'Pet Sitters', 'Pets'] },
  { category: 'Tourism & Outdoor Activities', services: ['Tour Operators', 'Travel Agents'] },
];

function ClientSearchForm() {
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!serviceQuery) {
      router.push('/browse-categories');
      return;
    }
    
    const serviceSlug = serviceQuery; // Already the value
    const locationSlug = locationQuery;
    
    let url = `/services/${serviceSlug}`;
    if (locationSlug) {
        url += `?location=${locationSlug}`;
    }
    
    router.push(url);
  };
  
  return (
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-5 gap-2 bg-white p-2 rounded-lg shadow-md border">
        <div className="relative md:col-span-2">
            <Autocomplete
                options={allServices}
                value={serviceQuery}
                onValueChange={setServiceQuery}
                placeholder="What service do you need?"
                inputClassName="h-12 border-0 focus-visible:ring-0 text-foreground"
            />
        </div>
        <div className="relative md:col-span-2">
            <Autocomplete
                options={allLocations}
                value={locationQuery}
                onValueChange={setLocationQuery}
                placeholder="e.g. Cape Town"
                inputClassName="h-12 border-0 focus-visible:ring-0 text-foreground"
            />
        </div>
        <Button type="submit" className="h-12 w-full md:col-span-1">Search</Button>
      </form>
  );
}

export default function AllCategoriesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex-grow bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight">All Service Categories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find trusted professionals for any service you need in South Africa.
          </p>
          {isClient && <ClientSearchForm />}
        </header>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
              {allCategories.map((group) => (
              <div key={group.category}>
                  <h2 className="text-2xl font-normal mb-4 border-b pb-2">{group.category}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
                  {group.services.map((serviceName) => {
                      const service = allServices.find(s => s.label.toLowerCase() === serviceName.toLowerCase());
                      const href = service ? `/services/${service.value}` : `/post-request?service=${serviceName.toLowerCase().replace(/\s+/g, '-')}`;
                      return (
                      <Link key={serviceName} href={href} className="text-foreground hover:text-primary transition-colors">
                          {serviceName}
                      </Link>
                      );
                  })}
                  </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
