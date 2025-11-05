
import Hero from '@/components/home/hero';
import HowItWorks from '@/components/home/how-it-works';
import PopularCategories from '@/components/home/popular-categories';
import ProCta from '@/components/home/pro-cta';
import Testimonials from '@/components/home/testimonials';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GrowClientBaseCta from '@/components/layout/grow-client-base-cta';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-normal mb-2">
              💼 Join Gaupro – Get More Leads and Grow Your Business
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-6">
              Connect with Real Customers Ready to Hire
            </h3>
            <div className="text-base text-foreground space-y-4">
              <p>
                Looking for steady work and reliable clients? Gaupro is South Africa’s trusted platform that helps service providers get hired faster. Whether you’re a builder, plumber, cleaner, electrician, painter, or handyman, Gaupro connects you directly with people who need your services now.
              </p>
              <p>
                No more chasing clients or spending money on ads — we send qualified leads straight to you. Simply create your profile, showcase your work, and start receiving real job requests in your area.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/pro/signup">Join as a Pro Today</Link>
              </Button>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />
        <ProCta />
        <GrowClientBaseCta />
      </main>
      <Footer />
    </>
  );
}
