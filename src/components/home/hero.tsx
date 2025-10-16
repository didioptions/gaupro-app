import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background-image');
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-headline">
          Find Trusted Pros for Any Project.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-white/80 mb-10">
          Get free quotes from qualified, trusted and reviewed professionals in your area.
        </p>
        <div className="mx-auto max-w-3xl">
          <form className="flex flex-col md:flex-row gap-4 p-2 bg-background rounded-lg shadow-lg border">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="What service do you need?"
                className="h-14 text-lg pl-4 pr-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                aria-label="Service needed"
              />
            </div>
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Where are you located?"
                className="h-14 text-lg pl-4 pr-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                aria-label="Location"
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
