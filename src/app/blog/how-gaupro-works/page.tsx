
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

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);


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

              <div className="relative my-8">
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Your%203-Step%20Solution%20%20A.jpg?alt=media&token=883e2a4a-b8bb-4e2a-ac97-5dfe7b4deb5a"
                  alt="Diagram showing the 3 simple steps to use Gaupro"
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-md"
                  data-ai-hint="steps diagram"
                />
              </div>

              <section id="what-is-gaupro" className="scroll-mt-20">
                <h2>What is Gaupro? South Africa's Leading Service Marketplace</h2>
                <p>Gaupro.co.za is South Africa's fastest-growing platform connecting customers with trusted service professionals. Whether you need an emergency plumber in Johannesburg, a reliable electrician in Cape Town, or a painter in Durban, Gaupro simplifies finding quality service providers across SA.</p>
                <h3>Gaupro by the Numbers (2024):</h3>
                <GauproByTheNumbers />
              </section>

              <section id="step-1" className="scroll-mt-20 pt-8">
                <h2>Step 1: Post Your Job on Gaupro (Takes Only 2 Minutes)</h2>
                <p>Getting started with Gaupro South Africa is incredibly simple:</p>
                <div className="my-6">
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/notegpt-20260106231900-02.jpeg?alt=media&token=0bf03d3e-a092-49fa-a712-e4f3280117e2"
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
                        src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Receive%20%26%20Compare.jpg?alt=media&token=0e9a16e3-521d-486d-ad30-d0a9e6616637"
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
                        src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Hire%20with%20Confidence%20Through%20Gaupro.jpg?alt=media&token=011295c6-b91f-4962-8ba9-02a34b285ced"
                        alt="Illustration of a security shield with checkmarks, representing a secure hiring process"
                        width={800}
                        height={300}
                        className="rounded-lg w-full"
                        data-ai-hint="security shield handshake"
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
                        src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Start%20Using%20Gaupro%20Today.jpg?alt=media&token=69ccc664-d20b-43ad-8a7c-4f41c37b8925"
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
                <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold">About This Article</h3>
                    <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights.</p>
                    <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> May 2025</p>
                    <p className="text-sm"><strong className="text-foreground">Next Update:</strong> February 2026</p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold">Share this guide and help other South Africans discover smarter hiring:</p>
                        <div className="flex gap-4 flex-wrap text-sm mt-2">
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><WhatsAppIcon /> Share on WhatsApp</a>
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><FacebookIcon /> Share on Facebook</a>
                          <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><LinkedinIcon /> Share on LinkedIn</a>
                          <a href="mailto:?subject=Check out this guide from Gaupro" className="text-primary hover:underline flex items-center gap-1.5"><MailIcon /> Email to Friend</a>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
