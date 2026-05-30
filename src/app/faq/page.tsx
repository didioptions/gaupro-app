'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const faqSections = [
  {
    title: 'For Customers',
    value: 'customers',
    faqs: [
      {
        q: 'What is Gaupro?',
        a: 'Gaupro is a South African online platform that helps customers quickly find trusted local service providers for any project — from plumbing and building to cleaning, renovations, and more.',
      },
      {
        q: 'How does Gaupro work?',
        a: 'Gaupro gives you two easy ways to find the right service provider:\n\n1. Search manually – Browse and discover Pros directly on the website.\n2. Let Gaupro find Pros for you – Simply answer a few quick questions about what you need, and we’ll send your request to the right professionals.\n\nOnce your request is submitted, interested Pros will reach out to discuss your project. You can check their Gaupro profiles, compare quotes, and hire the one that suits you best.',
      },
      {
        q: 'Does Gaupro cost anything for customers?',
        a: 'No. Gaupro is 100% free for customers to post jobs, receive quotes, and compare professionals. You only pay the professional you decide to hire for their services.',
      },
      {
        q: 'What happens after I submit a project?',
        a: 'Your request is shared with nearby professionals who offer the service you need. Depending on your contact preferences, a Pro may call, text, or email you. You can receive up to 5 quotes from Pros ready to assist.',
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
        q: 'Should I add details about my project?',
        a: 'Absolutely. The more details you provide, the easier it is for Pros to understand your needs and send accurate quotes. Clear information helps connect you with the most suitable professionals.',
      },
      {
        q: 'When does my request close?',
        a: 'We will follow up after 48 hours to check if you’ve been helped. If there’s no response within 24 hours, we assume your issue is resolved and close the request. If not, we’ll send your request to more Pros until you confirm you’ve been assisted.',
      },
      {
        q: 'How do I change the details of my request?',
        a: 'If you haven’t received any quotes yet, email us the updated info and we’ll adjust your project. If you already have quotes, it’s best to contact those Pros directly to share the new details.',
      },
      {
        q: 'How do I cancel my request?',
        a: 'Go to My Projects, open your posted request, scroll down, and choose “Cancel Project.” You can also email us at support@gaupro.co.za.',
      },
      {
        q: 'Do professionals provide free estimates?',
        a: 'It depends on the Pro. Some offer free quotes, while others may charge. Feel free to ask each provider directly.',
      },
      {
        q: 'What if I have a problem with a professional I hired?',
        a: 'While Gaupro is a connection platform, we offer dispute resolution support to help facilitate communication. We recommend always having a written agreement with the pro you hire.',
      },
       {
        q: 'How do professionals accept payment?',
        a: 'Payment methods differ from business to business. Always confirm the preferred payment option with the Pro you choose.',
      },
    ],
  },
  {
    title: 'For Professionals',
    value: 'pros',
    faqs: [
      {
        q: 'How can my business benefit from Gaupro?',
        a: 'Gaupro is an online marketplace that connects you with customers looking to hire trusted service professionals. Our smart lead-matching system links your business with the right customers based on service type, location, and availability. When a matching job appears, we instantly send you the project details by email so you can decide whether to respond.',
      },
      {
        q: 'How does Gaupro work for Pros?',
        a: 'Gaupro uses a pay-per-lead system. You receive job notifications for free. Each notification includes a short summary of what the customer needs, and you only purchase the lead if you want to contact the customer to quote or set up a meeting.\n\nHow it works:\n\n1. Customers request a service on Gaupro.\n2. We send you a lead notification via SMS or email.\n3. You check the job details and location.\n4. If you’re interested, log in and buy the lead.\n5. You get full customer contact details.\n6. Contact the customer (preferably within 1 hour) and send your quote.\n7. The customer reviews multiple quotes and hires the Pro they prefer.\n\nUp to 5 Pros can respond to a lead. Customers compare prices, reviews, photos, and experience before choosing who to hire. When you win the job, you discuss the final details directly with the customer and get paid by them.\nTip: Always request a review — it helps you win more jobs.',
      },
      {
        q: 'How much do Gaupro leads cost?',
        a: 'Pros pay for leads using Gaupro credits. A single credit costs around R30, but the price drops with bulk packages (as low as R24 per credit). Each lead requires a certain number of credits based on category and demand, usually 1 to 5 credits.\n\nMany Pros find that one completed job can cover their entire year of lead costs.',
      },
      {
        q: 'Is there a monthly or annual fee?',
        a: 'No. You only pay for the leads you choose. You’re fully in control.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Credit Card, Instant EFT / Direct Deposit.',
      },
      {
        q: 'Will clicking “View Customer Details” charge me?',
        a: 'No. Clicking the button simply takes you to the full request page on Gaupro. You are only charged when you click “Purchase Lead” and have enough credits in your account.',
      },
      {
        q: 'Can I choose which types of leads I get?',
        a: 'Yes. You can select which services you offer by editing your service keywords on your profile.',
      },
      {
        q: 'Can I choose the areas I want to work in?',
        a: 'Yes. Set your service area radius in your business profile. Gaupro will only send leads within that range.',
      },
      {
        q: 'I’m not receiving many leads — why?',
        a: 'This may happen due to market demand or seasonal patterns. You can try adding more service categories. If the issue continues, you can contact our support team at support@gaupro.co.za.',
      },
      {
        q: 'What if I get a bad lead? Can I request a refund?',
        a: 'Yes. If a lead has incorrect information, wrong location, or the customer never requested the work, you can dispute it. If verified, we refund the credits back into your Gaupro balance. Requests must be made within 14 days. Note: Refunds are issued in credits only, not cash.',
      },
      {
        q: 'If I don’t win the job, do I still pay for the lead?',
        a: 'Yes. Gaupro charges for providing the customer details and connection. The customer chooses who to hire, and some markets are competitive.',
      },
      {
        q: 'Who are the customers requesting quotes?',
        a: 'These are real customers looking to compare quotes quickly. They want fast responses and choose Pros based on price, reviews, photos, and experience.',
      },
      {
        q: 'How do customers find Gaupro?',
        a: 'Most traffic comes from strong search engine rankings, social media promotions, and referrals. Gaupro invests in ongoing digital advertising and reaches a large volume of monthly visitors.',
      },
      {
        q: 'Do I have to buy leads to be listed on Gaupro’s directory?',
        a: 'No. Creating a profile on Gaupro is 100% free, and customers can contact you straight from your profile. Buying leads is optional.',
      },
      {
        q: 'How do I join Gaupro?',
        a: 'Click “Join as a Pro” on the website and follow the signup steps. You can also contact our support team if you need assistance.',
      },
      {
        q: 'I can’t sign in — what should I do?',
        a: 'Make sure you’re using your email address and password. Your first password is sent via email when you register. If you forgot your details, use the reset option. If you still cannot log in, reach out to our support team.',
      },
      {
        q: 'How do I update my email or personal details?',
        a: 'Sign in, open the Menu, then go to Account Settings. You can update your personal info, contact number, and email address there.',
      },
      {
        q: 'What if I get a negative review?',
        a: 'Gaupro values honest customer feedback, so reviews are not removed unless they break our Terms & Conditions. You are encouraged to reply professionally, clarify any misunderstandings, and improve relationships. Responding to reviews helps build trust with future customers. If you need help responding to a review, our support team can assist.',
      },
      {
        q: 'How much does Gaupro cost for professionals?',
        a: "It's free to create a profile. To send quotes to customers, pros purchase credits. This 'pay-as-you-go' system is often more cost-effective than traditional advertising. There are no monthly subscription fees.",
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

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="customers" className="w-full">
            <div className="flex justify-center border-b">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="customers"
                  className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-destructive data-[state=active]:text-destructive"
                >
                  For Customers
                </TabsTrigger>
                <TabsTrigger
                  value="pros"
                  className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-base text-foreground data-[state=active]:text-foreground"
                >
                  For Pros
                </TabsTrigger>
              </TabsList>
            </div>
            {faqSections.map((section) => (
              <TabsContent value={section.value} key={section.value} className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, index) => (
                    <AccordionItem value={`item-${section.value}-${index}`} key={index}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent className="whitespace-pre-wrap">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center border-t pt-12 mt-12">
            <h3 className="text-xl font-semibold">Still have questions?</h3>
            <p className="text-muted-foreground mt-2 mb-6">Our support team is here to help.</p>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
