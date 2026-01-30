
import FeaturedProfessionals from '@/components/home/featured-professionals';
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import Testimonials from '@/components/home/testimonials';
import WhyHire from '@/components/home/why-hire';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyHire />
      <FeaturedProfessionals />
      <HowItWorks />
      <PopularCategories />
      <Testimonials />
      <ProCta />
    </>
  );
}
