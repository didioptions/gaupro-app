
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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-normal mb-6">
              💼 Grow Your Service Business with Gaupro – South Africa’s Trusted Platform
            </h2>
            <div className="text-base text-foreground space-y-4 max-w-4xl mx-auto">
              <p>
                Looking for steady work and reliable clients? Gaupro connects South Africa’s builders, plumbers, electricians, cleaners, painters, handymen etc directly with customers who are ready to hire.
              </p>
              <p>
                Why join Gaupro? It gives you verified leads from real clients, helping you save time and money while growing your reputation. Showcase your skills, upload photos of your work, and collect reviews that make you stand out. With Gaupro, you choose the jobs that fit your schedule and expertise, giving you control while expanding your reach locally.
              </p>
              <p>
                No more chasing clients or spending on ads — Gaupro delivers qualified job requests straight to you, making it easy to turn leads into loyal customers. Sign up today and start growing your service business with confidence.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/pro/signup">Start getting leads today</Link>
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
