
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const TellUsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.998 18.0049H18.998V14.0049H22.998V18.0049ZM26.998 28.0049H18.998V24.0049H26.998V28.0049ZM26.998 22.0049H18.998V20.0049H26.998V22.0049Z" fill="currentColor"/>
    <path d="M12.998 34.0049H14.998V10.0049H38.998V28.0049H18.998L12.998 34.0049Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M10.998 16.0049H8.99805V36.0049L12.998 32.0049" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);
const ConnectIcon = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 25H18C15.7909 25 14 26.7909 14 29V32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M24 32V38" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 38H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31 15L34 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 10L36 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
const CompareIcon = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M26 27H16C14.3431 27 13 28.3431 13 30V32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M30 20H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 24H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 28H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
const HireIcon = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 24V19C14 16.2386 16.2386 14 19 14H20" stroke="currentColor" strokeWidth="2"/>
        <path d="M33 23V19C33 16.2386 30.7614 14 28 14H26" stroke="currentColor" strokeWidth="2"/>
        <path d="M26 10V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 10V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M31 10V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 33L19.5 28H28.5L32 33" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M28.8182 24H33V28.9091L29 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M19.1818 24H15V28.9091L19 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);
const DoneIcon = () => (
    <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 20L23 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 21C38 28.1797 31.1797 34 24 34C16.8203 34 11 28.1797 11 21C11 13.8203 16.8203 8 24 8C27.9378 8 31.4206 9.69383 33.9161 12.4419" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const steps = [
  {
    icon: <TellUsIcon />,
    title: "Tell Us",
    description: "Answer a few questions about what you need: we can help with standard services, big projects, quick fixes, and almost anything else.",
  },
  {
    icon: <ConnectIcon />,
    title: "Connect",
    description: "Our smart tech finds the right pros for your job.",
  },
  {
    icon: <CompareIcon />,
    title: "Compare",
    description: "Up to 5 pros will contact you with a quote to meet your specific needs.",
  },
  {
    icon: <HireIcon />,
    title: "Hire",
    description: "See reviews and profiles, choose and settle directly with your pro.",
  },
  {
    icon: <DoneIcon />,
    title: "Done",
    description: "Get your job done & review your pro.",
  },
];

export default function HowItWorks() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16">How It Works</h2>
        
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-10">
            {steps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-10">
                <div className="flex gap-6 items-start h-full">
                   {/* Timeline visual */}
                   <div className="flex flex-col items-center h-full">
                       <div className="text-muted-foreground text-sm font-semibold">0{index + 1}</div>
                       <div className="relative mt-2 flex-shrink-0 w-4 h-4 rounded-full bg-primary z-10"></div>
                       {index < steps.length -1 && (
                           <div className="mt-1 w-px h-full bg-border"></div>
                       )}
                   </div>
                   {/* Content */}
                   <div className="flex-grow pt-8">
                       <div className="text-primary mb-4">{step.icon}</div>
                       <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                       <p className="text-muted-foreground text-sm">{step.description}</p>
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-12">
            <Button variant="outline">
                Got questions? Get answers
            </Button>
        </div>

      </div>
    </section>
  );
}
