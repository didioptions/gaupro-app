
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';

export default function ServicesByLocationPage({ params }: { params: { location: string } }) {
  const locationName = params.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Create a Set to store unique labels, then convert back to an array
  const uniqueServiceLabels = Array.from(new Set(allServices.map(s => s.label)));

  // Sort the unique labels alphabetically
  const sortedServices = uniqueServiceLabels.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
            <header className="mb-10">
                <h1 className="text-3xl font-normal mb-2">{locationName} Contractors and Professional Services</h1>
                <p className="text-muted-foreground max-w-4xl">
                    Looking for a service professional in {locationName}? Gaupro has you covered, whether you're looking for a handyman, a contractor, an accountant or anything in between. With thousands of skilled professionals and businesses rated by {locationName} residents, you're sure to find what you need.
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
      <Footer />
    </>
  );
}
