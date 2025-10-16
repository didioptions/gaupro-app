import Hero from '@/components/home/hero';
import PopularCategories from '@/components/home/popular-categories';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import ProCta from '@/components/home/pro-cta';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
      </main>
      <Footer />
    </>
  );
}
