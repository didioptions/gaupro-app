import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import WhyHire from '@/components/home/why-hire';

// Lazy-load Testimonials to move its JavaScript execution (including Embla Carousel)
// out of the initial blocking thread. The skeleton ensures no layout shift occurs.
const Testimonials = dynamic(() => import('@/components/home/testimonials'), {
  ssr: false,
  loading: () => (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="h-10 w-72 bg-muted animate-pulse mx-auto mb-12 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-64 bg-muted animate-pulse rounded-xl" />
          <div className="h-64 bg-muted animate-pulse rounded-xl hidden md:block" />
          <div className="h-64 bg-muted animate-pulse rounded-xl hidden lg:block" />
        </div>
      </div>
    </section>
  )
});

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.gaupro.co.za/',
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyHire />
      <HowItWorks />
      <PopularCategories />
      <Testimonials />
      <ProCta />
    </main>
  );
}
