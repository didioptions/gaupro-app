
'use client';

import { ThumbsUp, Tags, FilePenLine } from "lucide-react";

const benefits = [
  {
    icon: <FilePenLine className="h-10 w-10 text-primary" />,
    title: 'Free to Use',
    description:
      'Using Gaupro costs you nothing. Tell us what you need done, and we’ll connect you with trusted pros who send you free quotes.',
  },
  {
    icon: <Tags className="h-10 w-10 text-primary" />,
    title: 'Get Free Estimates',
    description:
      'Receive multiple quotes so you can compare prices and understand your project cost before hiring anyone.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Hire with Confidence',
    description:
      'Check each pro’s ratings, photos, and past work. With all the info you need in one place, choosing the right expert becomes simple and stress-free.',
  },
];

export default function WhyHire() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-12">
          Hire Trusted Professionals on Gaupro for Any Job
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6">
              <div className="flex justify-center items-center h-20 w-20 rounded-full bg-primary/10 mx-auto mb-4">
                  {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
