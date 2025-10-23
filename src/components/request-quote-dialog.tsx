
'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { allServices, serviceQuestionSets } from '@/lib/service-questions';
import { Progress } from './ui/progress';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { FileUpload } from './ui/file-upload';
import Image from 'next/image';
import { CategoryImages } from '@/lib/category-images';

type FormData = {
  [key: string]: string | File[];
};

export function RequestQuoteDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: service selection
  const [selectedService, setSelectedService] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  
  const questionSet = serviceQuestionSets.find(qs => qs.service === selectedService);
  const totalSteps = (questionSet ? questionSet.questions.length : 0) + 1 + 1; // service selection + questions + contact info
  const progress = (step / (totalSteps - 1)) * 100;
  
  const serviceImage = CategoryImages.find(img => img.id === `${selectedService}-image`);

  const handleServiceSelect = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setPopoverOpen(false);
  };
  
  const handleNext = () => {
    if (step === 0 && selectedService) {
      setStep(1);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 0));
  };
  
  const handleInputChange = (questionId: string, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final Form Data:', { service: selectedService, ...formData });
    alert('Request Submitted! (See console for data)');
    setIsOpen(false); // Close dialog on submit
    // Reset state for next time
    setTimeout(() => {
        setStep(0);
        setSelectedService('');
        setFormData({});
    }, 500);
  };

  const renderStepContent = () => {
    const serviceLabel = allServices.find(s => s.value === selectedService)?.label;

    if (step === 0) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
            <DialogDescription>
              Give us a few details and we’ll match you with the right professional.
            </DialogDescription>
          </DialogHeader>
          <div className="py-8">
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="h-12 text-base w-full justify-between text-muted-foreground font-normal hover:bg-background"
                >
                  {selectedService
                    ? allServices.find((s) => s.value === selectedService)?.label
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
                          onSelect={handleServiceSelect}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              selectedService === s.value ? 'opacity-100' : 'opacity-0'
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
          </div>
          <div className="flex justify-end">
             <Button size="lg" disabled={!selectedService} onClick={handleNext}>
                Get Started
             </Button>
          </div>
        </>
      );
    }
    
    // Question steps
    const questionStepIndex = step - 1;
    if (questionSet && questionStepIndex < questionSet.questions.length) {
      const currentQuestion = questionSet.questions[questionStepIndex];
      return (
        <form>
          <DialogHeader className="space-y-0">
            <DialogTitle className="sr-only">Request a quote: {serviceLabel}</DialogTitle>
             <div className="flex items-center gap-4 mb-4">
                {step > 0 && <Button variant="ghost" size="icon" onClick={handleBack}><ArrowLeft/></Button>}
            </div>
             {serviceImage && (
                <div className="relative h-32 w-full mb-4">
                  <Image src={serviceImage.imageUrl} alt={serviceImage.description} fill className="object-cover rounded-t-lg" />
                </div>
              )}
          </DialogHeader>
          <div className="py-8 min-h-[250px]">
            <h3 className="font-semibold mb-4 text-lg">{currentQuestion.text}</h3>
            {currentQuestion.type === 'radio' && (
              <RadioGroup onValueChange={value => handleInputChange(currentQuestion.id, value)}>
                <div className="space-y-3">
                  {currentQuestion.options?.map(option => (
                    <div className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-primary" key={option.value}>
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="pl-3 font-normal cursor-pointer text-base">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
            {currentQuestion.type === 'textarea' && (
              <Textarea 
                placeholder={currentQuestion.placeholder}
                rows={5}
                onChange={e => handleInputChange(currentQuestion.id, e.target.value)}
              />
            )}
          </div>
          <div className="flex justify-between items-center">
            <Button variant="ghost" onClick={handleBack}>Back</Button>
            <Button size="lg" onClick={handleNext}>Continue</Button>
          </div>
        </form>
      );
    }

    // Final step: Contact Info
    return (
        <form onSubmit={handleSubmit}>
            <DialogHeader>
                 <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                        <ArrowLeft />
                    </Button>
                    <div>
                        <DialogDescription>Request for {serviceLabel}</DialogDescription>
                        <DialogTitle className="text-2xl">Where should we send your quotes?</DialogTitle>
                    </div>
                </div>
            </DialogHeader>
            <div className="py-8 space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="e.g. John Doe" onChange={e => handleInputChange('fullName', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" type="tel" placeholder="e.g. 082 123 4567" onChange={e => handleInputChange('phoneNumber', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="e.g. you@example.com" onChange={e => handleInputChange('email', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Sandton, Johannesburg" onChange={e => handleInputChange('location', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label>Upload Photos (Optional)</Label>
                    <FileUpload multiple onFilesChange={(files) => handleInputChange('photos', files)} />
                    <p className="text-xs text-muted-foreground">Add photos of the job to get more accurate quotes.</p>
                </div>
            </div>
            <div className="flex justify-end">
                <Button size="lg" type="submit" variant="destructive">Get FREE Quotes</Button>
            </div>
        </form>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh] p-0">
        <div className="absolute top-0 left-0 right-0">
         {step > 0 && <Progress value={progress} className="h-1" />}
        </div>
        <div className="p-6 pt-8">
          {renderStepContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
