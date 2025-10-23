
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, ArrowLeft, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { allServices, serviceQuestionSets } from '@/lib/service-questions';
import { Progress } from './ui/progress';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import Image from 'next/image';
import { CategoryImages } from '@/lib/category-images';
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = questions.length + 1; // +1 for final contact step
  const progress = step > 0 ? ((step - 1) / (totalSteps - 1)) * 100 : 0;

  const serviceImage = CategoryImages.find(
    (img) => img.id === `${selectedService}-image`.replace('-service', '')
  );

  useEffect(() => {
    if (isOpen) {
      // If a service is pre-selected, start from the first question.
      if (service) {
        setSelectedService(service);
        setStep(1); 
      } else {
        // Otherwise, start from the service selection.
        setStep(0); 
      }
    } else {
      // Delay reset to allow for closing animation
      setTimeout(() => {
        setStep(0);
        setSelectedService(service || '');
        setFormData({});
        setDate(undefined);
        setIsSubmitted(false);
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
    if (step === 1 && !service) {
      setStep(0);
    } else if (step > 1) {
      setStep((prev) => prev - 1);
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
    console.log('Final Form Data:', { service: selectedService, ...formData });
    setIsSubmitted(true);
  };
  
  const renderStepContent = () => {
    const serviceLabel = allServices.find((s) => s.value === selectedService)?.label;

    if (isSubmitted) {
      return (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">✅ Great News! Your Request Has Been Received</h2>
          <div className="text-muted-foreground space-y-4 text-left">
            <p>
              Thanks for posting your job on Gaupro — we’re already matching you with trusted local professionals.
            </p>
            <p>
              To make sure you get the most accurate quotes, our support team may reach out to confirm your details — so please keep your phone nearby 📞.
            </p>
            <p>
              If you’d like to speed things up, verify your contact details when prompted — this helps us connect you to verified pros even faster.
            </p>
            <h3 className="font-semibold text-foreground pt-2">Here’s What Happens Next:</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>Receive quotes from qualified service providers — usually within a few hours.</li>
                <li>Compare prices, view profiles, and read verified customer reviews.</li>
                <li>Chat or call the pros directly to discuss your needs or ask questions.</li>
                <li>Hire your favorite pro, agree on the details, and get your project done!</li>
            </ol>
            <p>
                With over 500 service categories, Gaupro connects you to the right expert for any job — from home repairs to creative projects. Let’s make your next project a success 🚀
            </p>
          </div>
          <Button onClick={() => setIsOpen(false)} className="mt-8">Done</Button>
        </div>
      );
    }

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
      // If for some reason a question isn't found, gracefully move to final step
      if (!currentQuestion) {
          setStep(totalSteps);
          return null;
      }

      return (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <DialogHeader className='text-left'>
              <div className="flex items-center gap-4 mb-4">
                  <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                    <ArrowLeft />
                  </Button>
                  <div>
                    <DialogTitle className="text-xl font-semibold">Request for {serviceLabel}</DialogTitle>
                    <DialogDescription>Step {step} of {totalSteps}</DialogDescription>
                  </div>
              </div>
            </DialogHeader>

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
                    type="button"
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
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" size="lg">
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
          <DialogHeader className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                <ArrowLeft />
              </Button>
              <div>
                <DialogTitle className="text-xl font-semibold">We're almost done, we just need your details.</DialogTitle>
                 <DialogDescription>Step {step} of {totalSteps}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="firstName"
                  placeholder="First Name"
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Your Email Address"
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Your Cellphone Number"
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    required
                    />
                </div>
                <div className="space-y-2">
                    <Select onValueChange={(value) => handleInputChange('contact_method', value)} defaultValue="anytime">
                    <SelectTrigger>
                        <SelectValue placeholder="Contact me Anytime" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="anytime">Contact me Anytime</SelectItem>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button size="lg" type="submit" className="bg-red-600 hover:bg-red-700">
              Submit
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
      {step > 0 && !isSubmitted && <Progress value={progress} className="h-2 absolute top-0 left-0 right-0" />}
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
      {isOpen && <RequestQuoteDialogContent service={service} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Dialog>
  );
}
