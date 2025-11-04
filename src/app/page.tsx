
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import Testimonials from '@/components/home/testimonials';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <PopularCategories />
        <HowItWorks />
        <Testimonials />
        <ProCta />
        <GrowClientBaseCta />
      </main>
      <Footer />
    </>
  );
}
