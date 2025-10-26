
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allServices } from '@/lib/service-questions';
import Link from 'next/link';

export default function ServicesByLocationPage({ params }: { params: { location: string } }) {
  const locationName = params.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Sort services alphabetically for consistent column flow
  const sortedServices = [...allServices].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold">{locationName} Contractors and Professional Services</h1>
              <p className="mt-4 text-muted-foreground max-w-4xl">
                Looking for a service professional in {locationName}? Gaupro has you covered, whether you're looking for a handyman, a contractor, an accountant or anything in between. With thousands of skilled professionals and businesses rated by {locationName} residents, you're sure to find what you need.
              </p>
            </header>

            <div className="border rounded-lg p-8">
              <div className="columns-2 md:columns-3 lg:columns-4 gap-x-8">
                {sortedServices.map(service => (
                  <div key={service.value} className="mb-3">
                    <Link href={`/services/${service.value}`} className="text-foreground hover:text-primary hover:underline">
                      {service.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
