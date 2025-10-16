import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-headline">
          Find Trusted Pros for Any Project.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Get free quotes from qualified, trusted and reviewed professionals in your area.
        </p>
        <div className="mx-auto max-w-3xl">
          <form className="flex flex-col md:flex-row gap-4 p-2 bg-background rounded-lg shadow-lg border">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="What service do you need?"
                className="h-14 text-lg pl-4 pr-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Service needed"
              />
            </div>
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Where are you located?"
                className="h-14 text-lg pl-4 pr-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
