
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProCta() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'pro-cta-image');
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-background overflow-hidden border">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4 font-headline text-foreground">Are you a Pro?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join Gaupro to grow your business. Get quality leads from customers in your area looking for your services.
              </p>
              <Button asChild size="lg">
                <Link href="/pro/signup">Start Getting Leads</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              {ctaImage && (
                <Image
                  src={ctaImage.imageUrl}
                  alt={ctaImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={ctaImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
