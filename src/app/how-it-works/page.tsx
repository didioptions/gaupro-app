
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
              Gaupro empowers service providers across South Africa to expand their reach and connect with a wider client base.
            </h1>
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/pro/register">Create Free Account</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
