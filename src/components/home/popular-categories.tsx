
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CategoryImages } from "@/lib/category-images";
import { allServices } from "@/lib/service-questions";
import { Button } from "../ui/button";

const popularServices = [
  { name: "Builders", value: "builders", imageId: "builders-image" },
  { name: "Movers", value: "movers", imageId: "movers-image" },
  { name: "Caterers", value: "caterers", imageId: "caterers-image" },
  { name: "Tree Felling", value: "top-companies/tree-felling", imageId: "tree-felling-image" },
  { name: "Handymen", value: "handyman", imageId: "handyman-image" },
  { name: "Solar Systems", value: "solar-systems", imageId: "solar-systems-image" },
  { name: "Security", value: "security", imageId: "security-image" },
  { name: "Rubble Removal", value: "top-companies/rubble-removal", imageId: "rubble-removal-image" },
];

const weddingServices = [
  { name: "Djs", value: "djs", imageId: "djs-image" },
  { name: "Event Decorations", value: "event-decorations", imageId: "event-decorations-image" },
  { name: "Party Planners", value: "party-planners", imageId: "event-planners-image" },
  { name: "Tent Hire", value: "tent-hire", imageId: "tent-hire-image" },
  { name: "Jumping Castle Hire", value: "jumping-castle-hire", imageId: "jumping-castle-image" },
  { name: "Toilet Hire", value: "toilet-hire", imageId: "toilet-hire-image" },
  { name: "Videographers", value: "videographers", imageId: "videographers-image" },
  { name: "Wedding Photographers", value: "wedding-photographers", imageId: "wedding-photographers-image" },
];

const homeServices = [
  { name: "Builders", value: "builders", imageId: "builders-image" },
  { name: "Plumbers", value: "plumber", imageId: "plumber-image" },
  { name: "Electricians", value: "electrician", imageId: "electrician-image" },
  { name: "Painters", value: "painter", imageId: "painter-image" },
  { name: "Gardeners", value: "gardeners", imageId: "gardeners-image" },
  { name: "Pest Control", value: "pest-control", imageId: "pest-control-image" },
  { name: "Tree Felling", value: "tree-felling", imageId: "tree-felling-image" },
  { name: "Carpenters", value: "carpenter", imageId: "carpenters-image" },
];

const businessServices = [
    { name: "Accounting", value: "accounting", imageId: "accounting-image" },
    { name: "Auditors", value: "auditors", imageId: "auditors-image" },
    { name: "Debt Counsellors", value: "debt-counsellors", imageId: "debt-counsellors-image" },
    { name: "Financial Advisors", value: "financial-advisors", imageId: "financial-advisors-image" },
    { name: "Home Loans", value: "home-loans", imageId: "home-loans-image" },
    { name: "Insurance", value: "insurance", imageId: "insurance-image" },
    { name: "Business Consultants", value: "business-consultants", imageId: "business-consultants-image" },
    { name: "Company Registrations", value: "company-registrations", imageId: "company-registrations-image" },
];

const CategoryCard = ({ name, value, imageId }: { name: string, value: string, imageId: string }) => {
  const categoryImage = CategoryImages.find(c => c.id === imageId);
  const href = value.startsWith('top-companies') ? `/${value}` : `/services/${value}`;
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
              <Link href="/browse-categories" className={triggerStyles}>
                More...
              </Link>
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
        </Tabs>
      </div>
    </section>
  );
}
