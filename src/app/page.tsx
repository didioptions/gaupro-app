
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
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4">
              Connect with Trusted Local Experts in Minutes
            </h2>
            <p className="text-base text-foreground">
              Need help at home or work? Gaupro makes it easy to find verified service professionals anywhere in South Africa. From builders and electricians to cleaners and plumbers, compare multiple quotes, read real reviews, and hire the right expert fast. No calls, no waiting — just reliable service you can trust.
            </p>
          </div>
        </section>
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
