'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil, Tags, ThumbsUp, Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allServices } from '@/lib/service-questions';


const features = [
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: 'Free to use',
    description: "You never pay to use Gaupro. Just tell us what you need done and we'll get you free quotes.",
  },
  {
    icon: <Tags className="h-8 w-8 text-primary" />,
    title: 'Get free estimates',
    description: "You'll get multiple quotes and know how much your project costs even before hiring a pro.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Hire with confidence',
    description: "See their reviews, photos and work history. When you've got all the info, hire the right pro.",
  },
];

export default function PostRequestPage() {
  const [service, setService] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const router = useRouter();
  
  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    if (service) {
      router.push(`/post-request/${service}`);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
    <div className="bg-secondary/50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Give us a few details and we’ll match you with the right professional.
          </p>

          <Card className="max-w-xl mx-auto text-left shadow-lg">
            <CardContent className="p-6">
               <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleGetStarted}>
                 <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={popoverOpen}
                      className="h-12 text-base flex-grow justify-between text-muted-foreground font-normal hover:bg-background"
                    >
                      {service
                        ? allServices.find((s) => s.value === service)?.label
                        : "What service do you need? e.g. Plumber"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandInput placeholder="Search for a service..." />
                      <CommandEmpty>No service found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {allServices.map((s) => (
                            <CommandItem
                              key={s.value}
                              value={s.label}
                              onSelect={(currentValue) => {
                                const selected = allServices.find(srv => srv.label.toLowerCase() === currentValue);
                                setService(selected?.value === service ? "" : selected?.value || "");
                                setPopoverOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  service === s.value ? 'opacity-100' : 'opacity-0'
                                )}
                              />
                              {s.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <Button type="submit" size="lg" className="h-12 px-8 text-base">
                  Get Started
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-12">
            Why hire Trusted Professionals on Gaupro for just about any project
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </main>
      <Footer />
      </>
  );
}
