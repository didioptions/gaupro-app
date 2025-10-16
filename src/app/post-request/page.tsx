'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil, Tags, ThumbsUp, Check, ChevronsUpDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
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

const plumbingServices = [
    { id: 'emergency', label: 'Emergency Plumbing' },
    { id: 'blocked_drain', label: 'Blocked Drain' },
    { id: 'leaking_pipe', label: 'Burst or leaking pipe' },
    { id: 'toilet_repairs', label: 'Toilet repairs' },
    { id: 'pipe_installation', label: 'Plumbing pipe installation or repair' },
    { id: 'fixture_installation', label: 'Tap, sink, bath, shower or other water fixture installation' },
    { id: 'fixture_repair', label: 'Tap, sink, bath, shower or other water fixture repair' },
    { id: 'geyser_repair', label: 'Geyser repair' },
    { id: 'geyser_installation', label: 'Geyser installation' },
    { id: 'dishwasher_installation', label: 'Washing Machine and Dishwasher Installation' },
    { id: 'compliance_certificate', label: 'Plumbing certificate of compliance' },
];

const allServices = [
  { value: 'plumber', label: 'Plumber' },
  { value: 'electrician', label: 'Electrician' },
  { value: 'carpenter', label: 'Carpenter' },
  { value: 'painter', label: 'Painter' },
  { value: 'builder', label: 'Builder' },
  { value: 'mover', label: 'Mover' },
  { value: 'cleaning-service', label: 'Cleaning Service' },
  { value: 'website-designer', label: 'Website Designer' },
  { value: 'architect', label: 'Architect' },
  { value: 'dstv-installer', label: 'DSTV Installer' },
  { value: 'security', label: 'Security' },
  { value: 'caterer', label: 'Caterer' },
  { value: 'handyman', label: 'Handyman' },
  { value: 'roofer', label: 'Roofer' },
  { value: 'tiler', label: 'Tiler' },
  { value: 'welder', label: 'Welder' },
];

export default function PostRequestPage() {
  const [service, setService] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  
  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    if (service) {
      setIsDialogOpen(true);
    }
  };

  const selectedServiceLabel = allServices.find((s) => s.value === service)?.label || "What service do you need? e.g. Plumber";


  return (
    <div className="bg-secondary/50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Give us a few details and we’ll match you with the right professional.
          </p>

          <Card className="max-w-2xl mx-auto text-left shadow-lg">
            <CardContent className="p-6">
               <form className="flex flex-col md:flex-row gap-4" onSubmit={handleGetStarted}>
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
                              value={s.value}
                              onSelect={(currentValue) => {
                                setService(currentValue === service ? '' : currentValue);
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get quotes for {allServices.find(s => s.value === service)?.label || 'Pros'}</DialogTitle>
            <DialogDescription>
              Answer a few questions and we'll connect you with the right pros.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <h3 className="mb-4 font-semibold text-foreground">What do you need help with?</h3>
            <RadioGroup defaultValue="emergency">
                <div className="space-y-3">
                    {plumbingServices.map((item) => (
                        <div className="flex items-center" key={item.id}>
                            <RadioGroupItem value={item.id} id={item.id} />
                            <Label htmlFor={item.id} className="pl-3 font-normal cursor-pointer">{item.label}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
          </div>
          <DialogFooter>
            <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setIsDialogOpen(false)}
            >
              Get Free Quotes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
