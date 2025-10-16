import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, Code, Camera, Sprout, Truck, Sparkles, Paintbrush } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Plumbing", icon: <Wrench className="h-8 w-8 text-primary" />, href: "/services/plumbing" },
  { name: "Electrician", icon: <Zap className="h-8 w-8 text-primary" />, href: "/services/electrician" },
  { name: "Web Design", icon: <Code className="h-8 w-8 text-primary" />, href: "/services/web-design" },
  { name: "Photography", icon: <Camera className="h-8 w-8 text-primary" />, href: "/services/photography" },
  { name: "Gardening", icon: <Sprout className="h-8 w-8 text-primary" />, href: "/services/gardening" },
  { name: "Moving", icon: <Truck className="h-8 w-8 text-primary" />, href: "/services/moving" },
  { name: "Cleaning", icon: <Sparkles className="h-8 w-8 text-primary" />, href: "/services/cleaning" },
  { name: "Painting", icon: <Paintbrush className="h-8 w-8 text-primary" />, href: "/services/painting" },
];

export default function PopularCategories() {
  return (
    <section id="categories" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group">
              <Card className="text-center p-6 flex flex-col items-center justify-center h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                  {category.icon}
                  <p className="font-semibold text-center text-sm">{category.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
