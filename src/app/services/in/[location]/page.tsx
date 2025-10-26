
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ServicesByLocationPage({ params }: { params: { location: string } }) {
  const locationName = params.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Content removed as requested */}
        </div>
      </main>
      <Footer />
    </>
  );
}
