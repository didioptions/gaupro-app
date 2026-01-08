
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscriptionForm() {
    return (
        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Your email address" className="h-12 text-base flex-grow bg-background" />
            <Button type="submit" size="lg" className="h-12">Subscribe</Button>
        </form>
    );
}
