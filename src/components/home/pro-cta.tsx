
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProCta() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'pro-cta-image');
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-primary text-primary-foreground overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Are you a Pro?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join Gaupro to grow your business. Get quality leads from customers in your area looking for your services.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/pro/signup">Start Getting Leads</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src={ctaImage?.imageUrl || "https://picsum.photos/seed/pro-tools/800/600"}
                alt={ctaImage?.description || "Professional with tools"}
                fill
                className="object-contain"
                data-ai-hint={ctaImage?.imageHint || "professional tools"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
