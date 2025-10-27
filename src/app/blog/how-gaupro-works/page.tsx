
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { PlayCircle, Star } from 'lucide-react';
import TrustBadges from '@/components/blog/how-gaupro-works/trust-badges';
import GauproByTheNumbers from '@/components/blog/how-gaupro-works/gaupro-by-numbers';
import ServiceCategoriesGrid from '@/components/blog/how-gaupro-works/service-categories-grid';
import FeatureComparisonTable from '@/components/blog/how-gaupro-works/feature-comparison-table';
import FaqAccordion from '@/components/blog/how-gaupro-works/faq-accordion';
import SuccessStories from '@/components/blog/how-gaupro-works/success-stories';

export default function HowGauproWorksPostPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-4xl mx-auto">
                How Gaupro Works: Your 3-Step Solution to Any Service Need in South Africa [2024 Complete Guide]
              </h1>
              <div className="mt-4 text-sm text-muted-foreground">
                <span>Last Updated: December 2024</span> | <span>Reading Time: 7 minutes</span> | 
                <span className="inline-flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1"/> 4.9/5 (2,847 reviews)
                </span>
              </div>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              <TrustBadges />
              
              <Card className="my-8 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="font-bold text-lg">Quick Answer: <span className="font-normal">Gaupro connects you with verified service providers in just 3 steps: Post your job (2 minutes) → Receive multiple quotes → Hire with confidence. It's 100% free for customers.</span></p>
                </CardContent>
              </Card>

              <div className="relative my-8 group cursor-pointer">
                <Image 
                  src="https://picsum.photos/seed/gaupro-video/1280/720"
                  alt="Video thumbnail showing how Gaupro works"
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-md"
                  data-ai-hint="video player"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                  <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <p className="text-center mt-2 font-semibold">Watch How Gaupro Works in 60 Seconds</p>
              </div>

              <section id="what-is-gaupro" className="scroll-mt-20">
                <h2>What is Gaupro? South Africa's Leading Service Marketplace</h2>
                <p>Gaupro.co.za is South Africa's fastest-growing platform connecting customers with trusted service professionals. Whether you need an emergency plumber in Johannesburg, a reliable electrician in Cape Town, or a painter in Durban, Gaupro simplifies finding quality service providers across SA.</p>
                <div className="relative my-6">
                   <Image 
                    src="https://picsum.photos/seed/sa-map/800/400"
                    alt="Infographic map of South Africa showing Gaupro coverage areas with service icons"
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                    data-ai-hint="South Africa map"
                  />
                </div>
                <h3>Gaupro by the Numbers (2024):</h3>
                <GauproByTheNumbers />
              </section>

              <section id="step-1" className="scroll-mt-20 pt-8">
                <h2>Step 1: Post Your Job on Gaupro (Takes Only 2 Minutes)</h2>
                <p>Getting started with Gaupro South Africa is incredibly simple:</p>
                <div className="my-6">
                  <Image 
                    src="https://picsum.photos/seed/gaupro-post-job/800/400"
                    alt="Screenshot of Gaupro homepage with Post a Job button highlighted"
                    width={800}
                    height={200}
                    className="rounded-lg w-full shadow-md"
                    data-ai-hint="website homepage"
                  />
                </div>
                <p>Visit Gaupro.co.za or download the Gaupro mobile app</p>
                <div className="flex gap-4 my-4">
                  <Link href="#"><Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={180} height={67} /></Link>
                  <Link href="#"><Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width={160} height={54} /></Link>
                </div>
                <p>Click the prominent "Post a Job" button (it's 100% FREE)</p>
                <p>Select your service category from 50+ options:</p>
                <ServiceCategoriesGrid />
                <p>Answer quick questions about your specific needs, add photos for more accurate quotes (optional but recommended), and click submit - your job goes live instantly!</p>
                <h3>What Makes Gaupro's Job Posting Special:</h3>
                <FeatureComparisonTable />
              </section>

              <section id="step-2" className="scroll-mt-20 pt-8">
                <h2>Step 2: Receive & Compare Multiple Quotes on Gaupro Platform</h2>
                <p>Within hours of posting on Gaupro.co.za, you'll receive 3-5 competitive quotes from interested professionals. You get detailed professional profiles including verification badges, experience, job history, reviews, and portfolios.</p>
                <div className="my-6">
                    <Image 
                        src="https://picsum.photos/seed/gaupro-dashboard/800/500"
                        alt="Screenshot of Gaupro dashboard showing multiple quotes received"
                        width={800}
                        height={500}
                        className="rounded-lg w-full shadow-md"
                        data-ai-hint="dashboard quotes"
                    />
                </div>
                <h3>Gaupro's Advanced Comparison Tools:</h3>
                <p>Our platform offers a side-by-side quote comparison dashboard, smart filtering options, and secure communication features to help you make the best choice.</p>
              </section>

              <section id="step-3" className="scroll-mt-20 pt-8">
                <h2>Step 3: Hire with Confidence Through Gaupro's Secure Platform</h2>
                <p>Once you've chosen your pro, click "Accept Quote" on the platform. Your information is exchanged securely, and you can arrange service details directly. After the job, you can rate and review your experience to help others in the community.</p>
                <div className="my-6">
                    <Image 
                        src="https://picsum.photos/seed/gaupro-hire/800/300"
                        alt="Illustration of a security shield with checkmarks, representing a secure hiring process"
                        width={800}
                        height={300}
                        className="rounded-lg w-full"
                        data-ai-hint="security shield"
                    />
                </div>
                 <p className="text-sm p-4 bg-yellow-100 border border-yellow-200 rounded-md">⚠️ Important: Gaupro never requests payment upfront. We're a free connection platform. You pay your chosen professional directly.</p>
              </section>

              <section id="faq" className="scroll-mt-20 pt-8">
                <h2>Frequently Asked Questions About Gaupro</h2>
                <FaqAccordion />
              </section>

              <section id="success-stories" className="scroll-mt-20 pt-8">
                <h2>Success Stories from Gaupro Users</h2>
                <SuccessStories />
              </section>

              <section id="cta" className="scroll-mt-20 pt-12 text-center">
                <h2>Start Using Gaupro Today - It's Free!</h2>
                <p>Ready to find your perfect service provider?</p>
                <div className="my-6">
                    <Image 
                        src="https://picsum.photos/seed/gaupro-devices/800/400"
                        alt="Laptop and phone showing the Gaupro platform"
                        width={800}
                        height={400}
                        className="rounded-lg w-full"
                        data-ai-hint="laptop phone"
                    />
                </div>
                 <Button size="lg" asChild>
                    <Link href="/post-request">Get Started</Link>
                </Button>
              </section>

            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
