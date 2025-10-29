
'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { allServices, serviceQuestionSets } from '@/lib/service-questions';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { CategoryImages } from '@/lib/category-images';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

type FormData = {
  [key: string]: string | string[] | File[] | boolean | Date | undefined;
};

interface RequestQuoteDialogProps {
  children: React.ReactNode;
  service: string;
  initialStep?: number;
  initialData?: any;
}

export function RequestQuoteDialog({ children, service, initialStep = 0, initialData = {} }: RequestQuoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(initialStep);
  const [selectedService, setSelectedService] = useState(service);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [date, setDate] = useState<Date | undefined>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    // When the dialog opens, reset to the initial state
    if (open) {
      setStep(initialStep);
      setSelectedService(service);
      setFormData(initialData);
      setIsSubmitted(false);
      setAgreedToTerms(false);
    }
  }, [open, initialStep, service, initialData]);

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = (questions?.length || 0); // Total steps doesn't include service selection
  const progress = step > 0 ? ((step) / (totalSteps -1)) * 100 : 0;

  const serviceImage = CategoryImages.find(
    (img) => img.id === `${selectedService}-image`.replace('-service', '')
  );

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleInputChange = (
    questionId: string,
    value: string | string[] | File[] | boolean | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
  };

   const handleCheckboxChange = (questionId: string, checked: boolean | string, optionValue: string) => {
    const currentValues = (formData[questionId] as string[] | undefined) || [];
    if (checked) {
        handleInputChange(questionId, [...currentValues, optionValue]);
    } else {
        handleInputChange(questionId, currentValues.filter((v) => v !== optionValue));
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    handleInputChange('urgency_date', selectedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
        alert("You must agree to the Terms of Service and Privacy Policy.");
        return;
    }
    console.log('Final Form Data:', { service: selectedService, ...formData });
    setIsSubmitted(true);
  };

  const renderStepContent = () => {
    const serviceLabel = allServices.find((s) => s.value === selectedService)?.label;

    if (isSubmitted) {
      return (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">✅ Your Request Has Been Received</h2>
          <div className="text-foreground space-y-4 text-left">
            <p>
              Thanks for posting your job on Gaupro — we’re already matching you with trusted local professionals.
            </p>
             <p className="font-semibold pt-2">Here’s What Happens Next:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>Receive quotes from qualified service providers — usually within a few hours.</li>
                <li>Compare prices, view profiles, and read verified customer reviews.</li>
                <li>Hire your favorite pro, agree on the details, and get your project done!</li>
            </ol>
          </div>
          <Button onClick={() => setOpen(false)} className="mt-8">
              Done
          </Button>
        </div>
      );
    }

    const questionStepIndex = step; // step 0 is the first question
    const isQuestionStep = questionStepIndex >= 0 && questionStepIndex < questions.length;
    const isFinalStep = step === totalSteps;
    
    if (isQuestionStep) {
      const currentQuestion = questions[questionStepIndex];
       if (!currentQuestion) {
          setStep(totalSteps);
          return null;
      }

      const isNextButtonDisabled = () => {
        if (currentQuestion.type === 'textarea') return false; // allow empty textarea
        const value = formData[currentQuestion.id];
        if (currentQuestion.type === 'checkbox') {
          return !value || (Array.isArray(value) && value.length === 0);
        }
        return !value;
      };

      return (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <header className='text-left'>
              <div className="flex items-center gap-4 mb-4">
                  {step > 0 && <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                    <ArrowLeft />
                  </Button>}
                  <div className={step === 0 ? 'w-full text-center' : ''}>
                    <h2 className="text-xl font-semibold">Request for {serviceLabel}</h2>
                    <p className="text-muted-foreground">Step {step + 1} of {totalSteps + 1}</p>
                  </div>
              </div>
            </header>

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
            {currentQuestion.type === 'checkbox' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-primary"
                    >
                      <Checkbox
                        id={option.value}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(currentQuestion.id, checked, option.value)
                        }
                        checked={((formData[currentQuestion.id] as string[]) || []).includes(option.value)}
                      />
                      <Label
                        htmlFor={option.value}
                        className="pl-3 font-normal cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
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
             {step > 0 ? <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button> : <div /> }
            <Button type="submit" size="lg" disabled={isNextButtonDisabled()}>
              Next
            </Button>
          </div>
        </form>
      );
    }
    
    if (isFinalStep) {
      return (
        <form onSubmit={handleSubmit}>
          <header className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                <ArrowLeft />
              </Button>
              <div>
                <h2 className="text-xl font-semibold">We're almost done, we just need your details.</h2>
                 <p className="text-muted-foreground">Step {totalSteps + 1} of {totalSteps + 1}</p>
              </div>
            </div>
          </header>
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
             <div className="space-y-2">
                <Input
                id="phoneNumber"
                type="tel"
                placeholder="Your Cellphone Number"
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                required
                />
            </div>
            <div className="flex items-start space-x-3 pt-4">
                <Checkbox 
                    id="terms-dialog"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                />
                <Label htmlFor="terms-dialog" className="text-xs text-muted-foreground font-normal">
                    I agree to Gaupro’s <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </Label>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button size="lg" type="submit" className="bg-red-600 hover:bg-red-700" disabled={!agreedToTerms}>
              Get Quotes
            </Button>
          </div>
        </form>
      );
    }
    
    return null;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
          <CardContent className="p-6 md:p-8">
              {step > 0 && !isSubmitted && <Progress value={progress} className="h-2 mb-6" />}
              {renderStepContent()}
          </CardContent>
      </DialogContent>
    </Dialog>
  );
}
