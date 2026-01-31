import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProCta() {
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-background overflow-hidden border">
          <div className="text-center p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-normal mb-4 font-headline text-foreground">Are you a Pro?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Gaupro to grow your business. Get quality leads from customers in your area looking for your services.
            </p>
            <Button asChild size="lg">
              <Link href="/pro/signup">Start Getting Leads</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
