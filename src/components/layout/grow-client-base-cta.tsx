import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GrowClientBaseCta() {
    return (
        <section className="bg-secondary/50 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Client Base?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Expand your reach and connect with thousands of potential customers actively seeking your services. Join our verified network and turn leads into loyal clients.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                    <Link href="/pro/signup">Become a Gaupro Pro Today!</Link>
                </Button>
            </div>
        </section>
    );
}
