
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import Testimonials from '@/components/home/testimonials';
import WhyHire from '@/components/home/why-hire';
import ProCta from '@/components/home/pro-cta';
import FeaturedProfessionals from '@/components/home/featured-professionals';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyHire />
        <PopularCategories />
        <FeaturedProfessionals />
        <HowItWorks />
        <Testimonials />
        <ProCta />
      </main>
      <Footer />
    </>
  );
}
