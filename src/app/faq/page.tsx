import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqSections = [
  {
    title: 'For Customers',
    faqs: [
      {
        q: 'Is Gaupro really free for customers?',
        a: 'Yes, 100%. Posting a job, receiving quotes, and comparing professionals is completely free for customers. You only pay the professional you decide to hire for their services.',
      },
      {
        q: 'How does Gaupro verify its professionals?',
        a: "Every professional on Gaupro goes through a multi-step verification process, which includes ID verification, business registration checks (where applicable), and a review of their qualifications and past work. Look for the 'Verified' badge on their profile.",
      },
      {
        q: 'How quickly will I receive quotes?',
        a: 'Most users receive their first few quotes within 1-2 hours of posting a job. For popular services in major cities, it can be as fast as 30 minutes.',
      },
      {
        q: 'What if I have a problem with a professional I hired?',
        a: 'While Gaupro is a connection platform, we offer dispute resolution support to help facilitate communication. We recommend always having a written agreement with the pro you hire.',
      },
    ],
  },
  {
    title: 'For Professionals',
    faqs: [
      {
        q: 'How much does Gaupro cost for professionals?',
        a: 'It\'s free to create a profile. To send quotes to customers, pros purchase credits. This "pay-as-you-go" system is often more cost-effective than traditional advertising. There are no monthly subscription fees.',
      },
      {
        q: 'How do I get more leads on Gaupro?',
        a: 'To maximize your leads, ensure your profile is 100% complete with high-quality photos, respond to requests quickly (under 30 minutes is best), and actively ask your happy customers for reviews.',
      },
      {
        q: 'What is the average Return on Investment (ROI)?',
        a: 'Top-performing pros on Gaupro see an average ROI of over 1,200%. A single successful job can often cover the cost of credits for several months.',
      },
      {
        q: 'What services are most successful on Gaupro?',
        a: 'Emergency and high-demand home services consistently perform well, including Plumbing, Electrical Work, Geyser Repair, and Appliance Repair. IT Support and specialized cleaning also have high success rates.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about using Gaupro, whether you're
              a customer or a service professional.
            </p>
          </header>

          <div className="max-w-3xl mx-auto space-y-12">
            {faqSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="text-center border-t pt-12">
                <h3 className="text-xl font-semibold">Still have questions?</h3>
                <p className="text-muted-foreground mt-2 mb-6">Our support team is here to help.</p>
                <Button asChild>
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
