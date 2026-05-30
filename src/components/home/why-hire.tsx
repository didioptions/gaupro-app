'use client';

import { Check, Clock, DollarSign, MapPin, BadgeCheck } from "lucide-react";

const benefits = [
    { icon: <BadgeCheck className="h-5 w-5 text-primary" />, text: 'Verified Experts' },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: 'Save Time' },
    { icon: <DollarSign className="h-5 w-5 text-primary" />, text: 'Compare Quotes' },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: 'Nearby Services' },
];

export default function WhyHire() {
  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4">
                Gaupro – Find Trusted Local Professionals Fast
            </h2>
            <div className="flex justify-center items-center gap-x-4 gap-y-2 flex-wrap mb-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        {benefit.icon}
                        <span>{benefit.text}</span>
                    </div>
                ))}
            </div>
            <p className="text-foreground/80 leading-relaxed">
                “Just tell us the service you need, and Gaupro instantly connects you with the best local professionals in your area. From plumbing and electrical work to cleaning, tech support, and home repairs, our platform makes it easy to find trusted, verified experts without any hidden fees or stress. Get multiple quotes, compare professionals, and hire with confidence – all in minutes. Gaupro is your go-to platform for fast, reliable, and professional local services.”
            </p>
        </div>
      </div>
    </section>
  );
}
