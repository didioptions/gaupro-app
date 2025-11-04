
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CategoryImages } from "@/lib/category-images";

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
          <TabsContent value="more">
             <div className="text-center text-muted-foreground">Coming soon...</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
