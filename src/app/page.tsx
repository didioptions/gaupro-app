
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import Testimonials from '@/components/home/testimonials';
import WhyHire from '@/components/home/why-hire';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyHire />
        <HowItWorks />
        <PopularCategories />
        <Testimonials />
        <ProCta />
      </main>
      <Footer />
    </>
  );
}
