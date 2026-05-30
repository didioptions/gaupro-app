import { allServices } from '@/lib/service-questions';
import Link from 'next/link';
import { allLocations } from '@/lib/locations';

export async function generateStaticParams() {
  return allLocations.map((location) => ({
    location: location.value,
  }));
}

export default function ServicesByLocationPage({ params }: { params: { location: string } }) {
  const locationName = params.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Create a Set to store unique labels, then convert back to an array
  const uniqueServiceLabels = Array.from(new Set(allServices.map(s => s.label)));

  // Sort the unique labels alphabetically
  const sortedServices = uniqueServiceLabels.sort((a, b) => a.localeCompare(b));

  return (
    <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
            <header className="mb-10">
                <h1 className="text-3xl font-normal mb-2">Find Trusted Service Professionals in {locationName}</h1>
                <p className="text-muted-foreground max-w-4xl">
                    Looking for reliable home or business services in {locationName}? Gaupro connects you with top-rated local professionals — from handymen, plumbers, and electricians to accountants and contractors. Discover over 575 verified experts and businesses, reviewed by real {locationName} residents. Compare quotes, check ratings, and hire with confidence today.
                </p>
            </header>
            <div className="border p-6 md:p-10 rounded-lg">
                <div className="columns-2 md:columns-4 gap-x-8">
                    {sortedServices.map((serviceLabel) => {
                        const service = allServices.find(s => s.label === serviceLabel);
                        const href = service ? `/services/${service.value}?location=${params.location}` : '#';
                        return (
                            <Link key={serviceLabel} href={href} className="block text-sm text-foreground hover:text-primary py-1.5">
                                {serviceLabel}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    </main>
  );
}
