
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CategoryImages } from "@/lib/category-images";

const popularServices = [
  { name: "Builders", href: "/services/builders", imageId: "builders-image" },
  { name: "Movers", href: "/services/movers", imageId: "movers-image" },
  { name: "Security", href: "/services/security", imageId: "security-image" },
  { name: "Handyman", href: "/services/handyman", imageId: "handyman-image" },
  { name: "Architects", href: "/services/architects", imageId: "architects-image" },
  { name: "DSTV Installers", href: "/services/dstv-installers", imageId: "dstv-installers-image" },
  { name: "Cleaning Services", href: "/services/cleaning-service", imageId: "cleaning-image" },
  { name: "Caterers", href: "/services/caterers", imageId: "caterers-image" },
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
  return (
    <section id="categories" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="popular" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
              <TabsTrigger value="popular" className="py-2.5">Popular Services</TabsTrigger>
              <TabsTrigger value="business" className="py-2.5">Business & Finance</TabsTrigger>
              <TabsTrigger value="home" className="py-2.5">Home, Building & Garden</TabsTrigger>
              <TabsTrigger value="weddings" className="py-2.5">Weddings & Events</TabsTrigger>
              <TabsTrigger value="more" className="py-2.5">More...</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="popular">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {popularServices.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="business">
             <div className="text-center text-muted-foreground">Coming soon...</div>
          </TabsContent>
          <TabsContent value="home">
             <div className="text-center text-muted-foreground">Coming soon...</div>
          </TabsContent>
          <TabsContent value="weddings">
             <div className="text-center text-muted-foreground">Coming soon...</div>
          </TabsContent>
          <TabsContent value="more">
             <div className="text-center text-muted-foreground">Coming soon...</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
