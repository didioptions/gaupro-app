
'use client';

import React, { useState, useEffect } from 'react';
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
import { Check, ChevronsUpDown, ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
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
import Link from 'next/link';
import { Checkbox } from './ui/checkbox';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';

type FormData = {
  [key: string]: string | File[] | boolean | Date | undefined;
};

// Main Dialog Content Component
function RequestQuoteDialogContent({
  service,
  isOpen,
  setIsOpen,
}: {
  service?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(service || '');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [date, setDate] = useState<Date | undefined>();

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = questions.length + 1;
  const progress = step > 0 ? (step / totalSteps) * 100 : 0;

  const serviceImage = CategoryImages.find(
    (img) => img.id === `${selectedService}-image`
  );

  useEffect(() => {
    if (isOpen) {
      if (service) {
        setSelectedService(service);
        setStep(1);
      }
    } else {
      // Delay reset to allow for closing animation
      setTimeout(() => {
        setStep(0);
        setSelectedService(service || '');
        setFormData({});
        setDate(undefined);
      }, 300);
    }
  }, [isOpen, service]);

  const handleServiceSelect = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setPopoverOpen(false);
    setStep(1);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 1 && service) {
      // If a service was passed as a prop, closing is the only "back" action from step 1
      setIsOpen(false);
    } else {
      setStep((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleInputChange = (
    questionId: string,
    value: string | File[] | boolean | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    handleInputChange('urgency_date', selectedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }
    console.log('Final Form Data:', { service: selectedService, ...formData });
    alert('Request Submitted! (See console for data)');
    setIsOpen(false);
  };

  const renderStepContent = () => {
    const serviceLabel = allServices.find((s) => s.value === selectedService)?.label;

    // Step 0: Service Selection (only if no service is pre-selected)
    if (step === 0 && !service) {
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
                    : 'What service do you need? e.g. Plumber'}
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
        </>
      );
    }
    
    const questionStepIndex = step - 1;
    const isQuestionStep = questionStepIndex >= 0 && questionStepIndex < questions.length;
    const isFinalStep = step === totalSteps;

    // Steps 1 to N: Question Steps
    if (isQuestionStep) {
      const currentQuestion = questions[questionStepIndex];

      return (
        <form>
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                <ArrowLeft />
              </Button>
              <h2 className="text-xl font-semibold">Request for {serviceLabel}</h2>
            </div>

            {serviceImage && questionStepIndex === 0 && (
              <div className="relative h-32 w-full mb-4">
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description || ''}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={serviceImage.imageHint}
                />
              </div>
            )}
            
          <div className="py-8 min-h-[250px]">
            <h3 className="font-semibold mb-4 text-lg">{currentQuestion.text}</h3>
            {currentQuestion.type === 'radio' && (
              <RadioGroup
                onValueChange={(value) => handleInputChange(currentQuestion.id, value)}
                value={formData[currentQuestion.id] as string | undefined}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <div
                      className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-primary"
                      key={option.value}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="pl-3 font-normal cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
            {currentQuestion.id === 'urgency' && formData['urgency'] === 'specific_date' && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal mt-4',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={handleDateSelect} initialFocus />
                </PopoverContent>
              </Popover>
            )}
            {currentQuestion.type === 'textarea' && (
              <Textarea
                placeholder={currentQuestion.placeholder}
                rows={5}
                onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                defaultValue={formData[currentQuestion.id] as string | undefined}
              />
            )}
          </div>
          <div className="flex justify-between items-center">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button size="lg" onClick={handleNext}>
              Next
            </Button>
          </div>
        </form>
      );
    }
    
    // Final Step: Contact Information
    if (isFinalStep) {
      return (
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                <ArrowLeft />
              </Button>
              <div>
                <DialogDescription>Request for {serviceLabel}</DialogDescription>
                <DialogTitle className="text-2xl font-bold">
                  Where should we send your quotes?
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          <div className="py-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="e.g. John Doe"
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="e.g. 082 123 4567"
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. you@example.com"
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g. Sandton, Johannesburg"
                onChange={(e) => handleInputChange('location', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>How should professionals contact you?</Label>
              <RadioGroup
                onValueChange={(value) => handleInputChange('contact_method', value)}
                defaultValue="any_method"
              >
                <div className="grid grid-cols-2 gap-3">
                  {['Phone call', 'WhatsApp', 'Email', 'Any method'].map((method) => (
                    <div
                      className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-primary"
                      key={method}
                    >
                      <RadioGroupItem
                        value={method.toLowerCase().replace(' ', '_')}
                        id={method}
                      />
                      <Label
                        htmlFor={method}
                        className="pl-3 font-normal cursor-pointer text-base"
                      >
                        {method}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Upload Photos (Optional)</Label>
              <FileUpload
                multiple
                onFilesChange={(files) => handleInputChange('photos', files)}
              />
              <p className="text-xs text-muted-foreground">
                Add photos of the job to get more accurate quotes.
              </p>
            </div>
            <div className="flex items-start space-x-3 pt-4">
              <Checkbox
                id="terms"
                onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                I agree to Gaupro’s{' '}
                <Link href="/terms" className="underline text-primary" target="_blank">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="underline text-primary" target="_blank">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="lg" type="submit">
              Get FREE Quotes
            </Button>
          </div>
        </form>
      );
    }
    
    // Fallback, should not be reached if logic is correct
    return null;
  };

  return (
    <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0 flex flex-col">
      {step > 0 && <Progress value={progress} className="h-1 absolute top-0 left-0 right-0" />}
      <div className="p-6 pt-10 overflow-y-auto">{renderStepContent()}</div>
    </DialogContent>
  );
}

// Wrapper Component to handle Dialog and DialogTrigger
export function RequestQuoteDialog({
  children,
  service,
}: {
  children: React.ReactNode;
  service?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* Pass state and state setter to the content */}
      <RequestQuoteDialogContent service={service} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Dialog>
  );
}
