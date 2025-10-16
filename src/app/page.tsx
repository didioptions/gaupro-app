import Hero from '@/components/home/hero';
import PopularCategories from '@/components/home/popular-categories';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import ProCta from '@/components/home/pro-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <HowItWorks />
      <Testimonials />
      <ProCta />
    </>
  );
}
