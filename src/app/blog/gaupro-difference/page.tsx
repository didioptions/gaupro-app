
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { WhatsApp, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

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

export default function GauproDifferencePage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <article>
          <header className="bg-secondary/50 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight max-w-3xl mx-auto">
                From Chaos to Confidence
              </h1>
            </div>
          </header>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto prose lg:prose-lg prose-headings:font-normal prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
              
              <p className="lead text-xl text-muted-foreground">
                Finding reliable service professionals in South Africa has never been easy.
              </p>
              
              <p>Whether you need a plumber in Johannesburg, an electrician in Cape Town, or a builder in Durban, the process often involves endless phone calls, unreliable referrals, and uncertainty about quality and pricing.</p>
              
              <p>For many South Africans, hiring a service professional has felt like a gamble.</p>
              
              <p>That’s exactly the problem Gaupro was created to solve.</p>

              <div className="p-4 bg-secondary/50 rounded-lg my-6">
                <p>Before hiring, it helps to understand current market prices. <Link href="/blog/service-costs-south-africa" className="text-red-600 underline">Read our complete guide to service costs in South Africa.</Link></p>
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl">Why Hiring Service Professionals Used to Be So Frustrating</h2>
                <p>Traditionally, people relied on word-of-mouth recommendations, classified ads, or social media groups. While these options sometimes worked, they often came with problems such as:</p>
                <ul>
                    <li>Unverified contractors</li>
                    <li>No real reviews or job history</li>
                    <li>Unclear pricing</li>
                    <li>Professionals who don’t show up or don’t deliver quality work</li>
                </ul>
                <p>This made hiring stressful, time-consuming, and risky — especially when urgent work was needed.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl">How Gaupro Brings Confidence to the Process</h2>
                <p>Gaupro is a South African-built platform designed to make hiring service professionals simple, transparent, and reliable.</p>
                <p>Instead of searching across multiple platforms, users can find trusted professionals in one place.</p>
                
                <h3>Verified Local Professionals</h3>
                <p>Each professional on Gaupro has a detailed profile that includes experience, customer reviews, and a history of completed jobs. This helps users make informed decisions instead of guessing.</p>
                
                <h3>Multiple Quotes, One Request</h3>
                <p>Users post a job once and receive several competitive quotes from interested professionals. This makes it easy to compare options and choose the right fit.</p>
                
                <h3>Transparency You Can Trust</h3>
                <p>With clear information, real reviews, and side-by-side comparisons, Gaupro removes uncertainty and replaces it with confidence.</p>
                
                <h3>Built for South Africa’s Needs</h3>
                <p>Gaupro connects customers with professionals across major South African cities and surrounding areas, including Johannesburg, Pretoria, Cape Town, Durban, and more.</p>
                <p>By supporting local professionals and protecting customers, Gaupro creates a better experience for everyone involved.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl">A Better Way to Hire Service Professionals</h2>
                <p>Hiring a service professional doesn’t have to be frustrating anymore.</p>
                <p>Gaupro is changing the way South Africans find and hire service professionals by turning a broken, stressful process into one that is simple, fair, and trustworthy.</p>
                <p>With Gaupro, hiring moves from chaos to confidence.</p>
              </section>

              <section className="space-y-4 pt-8 mt-8 border-t bg-secondary/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">About This Article</h3>
                <p className="text-sm text-muted-foreground">This comprehensive guide is maintained by the Gaupro content team and updated monthly with the latest platform features, success stories, and market insights.</p>
                <p className="text-sm"><strong className="text-foreground">Last Updated:</strong> May 2025</p>
                <p className="text-sm"><strong className="text-foreground">Next Update:</strong> June 2026</p>
                <div className="mt-4">
                    <p className="text-sm font-semibold">Share this guide and help other South Africans discover smarter hiring:</p>
                    <div className="flex gap-4 flex-wrap text-sm mt-2">
                      <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><WhatsAppIcon /> Share on WhatsApp</a>
                      <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><FacebookIcon /> Share on Facebook</a>
                      <a href="#" className="text-primary hover:underline flex items-center gap-1.5"><LinkedinIcon /> Share on LinkedIn</a>
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
