
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CategoryImages } from "@/lib/category-images";
import { allServices } from "@/lib/service-questions";

const popularServices = [
  { name: "Builders", href: "/services/builders", imageId: "builders-image" },
  { name: "Movers", href: "/services/movers", imageId: "movers-image" },
  { name: "Caterers", href: "/services/caterers", imageId: "caterers-image" },
  { name: "Architects", href: "/services/architects", imageId: "architects-image" },
  { name: "Handyman", href: "/services/handyman", imageId: "handyman-image" },
  { name: "Solar Panel Installation", href: "/services/solar-systems", imageId: "solar-systems-image" },
  { name: "Security", href: "/services/security", imageId: "security-image" },
  { name: "Cleaning Services", href: "/services/cleaning-service", imageId: "cleaning-service-image" },
];

const weddingServices = [
  { name: "DJs", href: "/services/djs", imageId: "djs-image" },
  { name: "Event Decorations", href: "/services/event-decorations", imageId: "event-decorations-image" },
  { name: "Party Planners", href: "/services/party-planners", imageId: "party-planners-image" },
  { name: "Tent Hire", href: "/services/tent-hire", imageId: "tent-hire-image" },
  { name: "Photographers", href: "/services/photographers", imageId: "photographers-image" },
  { name: "Toilet Hire", href: "/services/toilet-hire", imageId: "toilet-hire-image" },
  { name: "Videographers", href: "/services/videographers", imageId: "videographers-image" },
  { name: "Wedding Photographers", href: "/services/photographers", imageId: "wedding-photographers-image" },
];

const homeServices = [
  { name: "Builders", href: "/services/builders", imageId: "builders-image" },
  { name: "Plumbers", href: "/services/plumber", imageId: "plumber-image" },
  { name: "Electricians", href: "/services/electrician", imageId: "electrician-image" },
  { name: "Painters", href: "/services/painter", imageId: "painter-image" },
  { name: "Gardeners", href: "/services/gardeners", imageId: "gardeners-image" },
  { name: "Pest Control", href: "/services/pest-control", imageId: "pest-control-image" },
  { name: "Tree Felling", href: "/services/tree-felling", imageId: "tree-felling-image" },
  { name: "Carpenters", href: "/services/carpenter", imageId: "carpenters-image" },
];

const businessServices = [
    { name: "Accounting", href: "/services/accounting", imageId: "accounting-image" },
    { name: "Auditors", href: "/services/auditors", imageId: "auditors-image" },
    { name: "Debt Counsellors", href: "/services/debt-counsellors", imageId: "debt-counsellors-image" },
    { name: "Financial Advisors", href: "/services/financial-advisors", imageId: "financial-advisors-image" },
    { name: "Home Loans", href: "/services/home-loans", imageId: "home-loans-image" },
    { name: "Insurance", href: "/services/insurance", imageId: "insurance-image" },
    { name: "Business Consultants", href: "/services/business-consultants", imageId: "business-consultants-image" },
    { name: "Company Registrations", href: "/services/company-registrations", imageId: "company-registrations-image" },
];

const allCategories = [
  { category: 'Accommodation & Venues', services: ['Holiday Accommodation', 'Venues', 'Wedding Venues'] },
  { category: 'Agricultural', services: ['Agricultural Equipment', 'Agricultural Services', 'Irrigation'] },
  { category: 'Alarms & Security', services: ['Access Control', 'Alarm Systems', 'Armed Response', 'Car Alarms', 'Car Tracking', 'CCTV', 'Fire Safety', 'Private Investigators', 'Security', 'Tracing'] },
  { category: 'Architecture & Engineering', services: ['Architects', 'Borehole Drillers', 'Town Planners'] },
  { category: 'Business & Finance', services: ['Accounting', 'Auditors', 'Business Consultants', 'Company Registrations', 'Debt Collection', 'Debt Counsellors', 'Financial Advisors', 'Insurance', 'Loans', 'Medical Aid', 'Recruitment Agencies'] },
  { category: 'Cars & Automotive', services: ['Auto Electricians', 'Auto Glass', 'Batteries', 'Brakes and Clutches', 'Car Aircon Regassing', 'Car Window Tinting', 'Engine Overhauls', 'Fuels', 'Gearboxes', 'Mechanics', 'Panel Beaters', 'Towing', 'Tow Bars'] },
  { category: 'Computers & Telecommunications', services: ['Cellphone Repairs', 'Computers', 'Computer Repairs', 'Internet Solutions', 'Laptop Repairs', 'Networking', 'Office Equipment', 'Printer Cartridges'] },
  { category: 'Digital Design, Media & Marketing', services: ['Graphic Designers', 'Logo Design', 'Printing', 'Signs', 'Website Designers'] },
  { category: 'Family Care', services: ['Baby Sitters', 'Creches', 'Day Care Centres', 'Pre-Schools'] },
  { category: 'Fashion, Tailors & Outfitters', services: ['Dressmakers', 'Embroidery'] },
  { category: 'Food & Beverage', services: ['Cake Shops', 'Caterers'] },
  { category: 'Health, Wellness & Beauty', services: ['Beauty Salons', 'Chiropractors', 'Counsellors', 'Dentists', 'Dermatologists', 'Dieticians', 'Gynaecologists', 'Hair Stylists', 'Laser Clinics', 'Make Up Artists', 'Marriage Counsellors', 'Massage Therapists', 'Personal Trainers', 'Physiotherapists', 'Plastic Surgeons', 'Psychologists'] },
  { category: 'Heavy Equipment & Machinery', services: ['Generators', 'Plant Hire', 'Skip Hire', 'Tlb Hire'] },
  { category: 'Home Appliances & Equipment', services: ['Appliance Repairs', 'DSTV Installers', 'Fridge Repairs', 'Tv Installers', 'Tv Repairs'] },
  { category: 'Home, Building & Gardening', services: ['Air Conditioning', 'Aluminium Doors and Windows', 'Awnings', 'Balustrades', 'Bathroom Renovations', 'Blinds', 'Builders', 'Burglar Bars', 'Carpenters', 'Carpeting', 'Carpet Cleaning', 'Carports', 'Ceiling Installers', 'Cleaning Services', 'Concrete Slabs', 'Curtains', 'Doors', 'Drywalls', 'Electricians', 'Electric Fencing', 'Fencing', 'Flooring', 'Garage Doors', 'Garage Door Motors', 'Gardeners', 'Gas Installers', 'Gates', 'Gate Motors', 'Glass Works', 'Guttering', 'Handymen', 'High Pressure Cleaning', 'Home Improvements', 'Interior Designing', 'Kitchen Renovations', 'Laminate Flooring', 'Landscaping', 'Laundry Services', 'Locksmiths', 'Office Cleaning', 'Painters', 'Palisade Fencing', 'Paving', 'Pest Control', 'Plastering', 'Plumbers', 'Pool Cleaning', 'Precast Fencing', 'Prepaid Electricity Meters', 'Roofing', 'Security Gates', 'Shadeports', 'Shower Doors', 'Solar Geysers', 'Solar Systems', 'Swimming Pool Builders', 'Tar Surfacing', 'Thatched Roofing', 'Tiling', 'Tree Felling', 'Upholsterers', 'Upholstery Cleaning', 'Waterproofing', 'Welders', 'Wendy Houses', 'Window Cleaning', 'Window Tinting', 'Wire Mesh Fencing', 'Wooden Decking'] },
  { category: 'Lessons & Training', services: ['Computer Courses', 'Driving Schools', 'Firearm Training', 'First Aid', 'Forklift Training', 'Life Coaches', 'Security Training', 'Swimming Lessons', 'Team Building'] },
  { category: 'Manufacturers & Suppliers', services: ['Building Materials', 'Gas Suppliers', 'Marble and Granite Suppliers', 'Personal Protection Equipment', 'Stationery', 'Swimming Pool Supplies'] },
  { category: 'Pets', services: ['Groomers', 'Pet Sitters'] },
  { category: 'Property & Legal', services: ['Conveyancers', 'Divorce Lawyers', 'Estate Agents', 'Labour Lawyers', 'Lawyers'] },
  { category: 'Transportation & Logistics', services: ['Couriers', 'Movers', 'Rubble Removal', 'School Transport', 'Shuttle Services', 'Taxis', 'Transportation'] },
  { category: 'Tourism & Outdoor Activities', services: ['Tour Operators', 'Travel Agents'] },
  { category: 'Weddings, Events & Entertainment', services: ['Djs', 'Event Decorations', 'Event Planners', 'Florists', 'Party Planners', 'Photographers', 'Tent Hire', 'Toilet Hire', 'Videographers', 'Wedding Photographers'] },
];

const CategoryCard = ({ name, href, imageId }: { name: string, href: string, imageId: string }) => {
  const categoryImage = CategoryImages.find(c => c.id === imageId);
  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-40 w-full">
          <Image
            src={categoryImage?.imageUrl || "https://picsum.photos/seed/placeholder/300/200"}
            alt={categoryImage?.description || name}
            fill
            className="object-cover"
            data-ai-hint={categoryImage?.imageHint}
          />
        </div>
        <CardContent className="p-4 bg-card">
          <p className="font-semibold text-center text-foreground">{name}</p>
        </CardContent>
      </Card>
    </Link>
  );
};


export default function PopularCategories() {
  const triggerStyles = "px-4 py-2 rounded-md text-sm font-medium transition-colors bg-secondary/50 text-secondary-foreground hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md";

  // A helper map for quick lookups
  const serviceUrlMap = new Map(allServices.map(s => [s.label.toLowerCase().replace(/s$/, ''), s.value]));

  return (
    <section id="categories" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="popular" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap items-center justify-center gap-2 h-auto bg-transparent">
              <TabsTrigger value="popular" className={triggerStyles}>Popular Services</TabsTrigger>
              <TabsTrigger value="home" className={triggerStyles}>Home, Building & Garden</TabsTrigger>
              <TabsTrigger value="weddings" className={triggerStyles}>Weddings & Events</TabsTrigger>
              <TabsTrigger value="business" className={triggerStyles}>Business & Finance</TabsTrigger>
              <TabsTrigger value="more" className={triggerStyles}>More...</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {popularServices.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="weddings">
             <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {weddingServices.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="home">
             <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {homeServices.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="business">
             <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {businessServices.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="more" className="pt-8">
            <div className="columns-2 md:columns-4 lg:columns-5 gap-x-8">
              {allCategories.map((group) => (
                <div key={group.category} className="mb-8 break-inside-avoid">
                  <h3 className="font-semibold text-lg mb-3 border-b pb-2">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.services.map((serviceName) => {
                      // Normalize the service name for lookup (e.g., "Plumbers" -> "plumber")
                      const lookupKey = serviceName.toLowerCase().replace(/s$/, '');
                      const serviceValue = serviceUrlMap.get(lookupKey) || allServices.find(s => s.label === serviceName)?.value;
                      const href = serviceValue ? `/services/${serviceValue}` : '#';
                      return (
                        <li key={serviceName}>
                          <Link href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            {serviceName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

    