import type { Metadata } from 'next';
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import Testimonials from '@/components/home/testimonials';
import WhyHire from '@/components/home/why-hire';

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
