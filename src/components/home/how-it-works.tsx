
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { FilePenLine, Users, LayoutGrid, Handshake, Star } from 'lucide-react';

const steps = [
  {
    icon: <FilePenLine className="h-10 w-10 text-primary" />,
    title: "Tell Us",
    description: "Answer a few questions about what you need. We can help with standard services, big projects, quick fixes, and almost anything else.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Connect",
    description: "Our smart tech finds the right pros for your job.",
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    title: "Compare",
    description: "Up to 5 pros will contact you with a quote to meet your specific needs.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Hire",
    description: "See reviews and profiles, choose and settle directly with your pro.",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
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

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-12">The Easy Way</h2>
        
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-4">
                      {step.icon}
                      <span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${current === index ? 'w-6 bg-primary' : 'bg-primary/20'}`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <Button variant="outline">
                Got questions? Get answers
            </Button>
        </div>

      </div>
    </section>
  );
}
