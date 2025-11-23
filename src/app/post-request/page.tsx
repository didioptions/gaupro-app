
'use client';

import React, { useState, useEffect } from 'react';
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
import { Autocomplete } from '@/components/ui/autocomplete';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';
import { allLocations } from '@/lib/locations';

type FormData = {
  [key: string]: string | string[] | File[] | boolean | Date | undefined;
};

export default function PostRequestPage() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service') || '';
  const locationQuery = searchParams.get('location') || '';

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(serviceQuery);
  const [formData, setFormData] = useState<FormData>({});
  const [date, setDate] = useState<Date | undefined>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const initialLocation = locationQuery.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const [locationValue, setLocationValue] = useState(initialLocation);


  useEffect(() => {
    // If a service is passed in the URL, skip the first step.
    if (serviceQuery) {
      setStep(1);
    }
     if (locationQuery) {
      const locationLabel = allLocations.find(l => l.value === locationQuery)?.label || initialLocation;
      setLocationValue(locationLabel);
      handleInputChange('suburb', locationLabel);
      handleInputChange('city', ''); // Assuming suburb implies city for now
    }
  }, [serviceQuery, locationQuery]);

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = (questions?.length || 0) + 1; // +1 for the final details step
  const progress = step > 0 ? ((step - 1) / (totalSteps - 1)) * 100 : 0;

  const serviceImage = CategoryImages.find(
    (img) => img.id === `${selectedService}-image`.replace('-service', '')
  );

  const handleServiceSelect = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setStep(1);
  };

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
          <h2 className="text-2xl mb-4">✅ Your Request Has Been Received</h2>
          <div className="text-foreground space-y-4 text-left">
            <p>
              Thanks for posting your job on Gaupro — we’re already matching you with trusted local professionals.
            </p>
            <p>
              To make sure you get the most accurate quotes, our support team may reach out to confirm your details — so please keep your phone nearby 📞.
            </p>
            <p className="font-semibold pt-2">Here’s What Happens Next:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>Receive quotes from qualified service providers — usually in less than 20 minutes.</li>
                <li>Compare prices, view profiles, and read verified customer reviews.</li>
                <li>Chat or call the pros directly to discuss your needs or ask questions.</li>
                <li>Hire your favorite pro, agree on the details, and get your project done!</li>
            </ol>
            <p>
                With over 500 service categories, Gaupro connects you to the right expert for any job — from home repairs to creative projects. Let’s make your next project a success 🚀
            </p>
          </div>
          <Button asChild className="mt-8">
              <Link href="/">Done</Link>
          </Button>
        </div>
      );
    }

    if (step === 0) {
      return (
        <>
          <CardHeader>
             <CardTitle className="text-2xl">Request a Quote</CardTitle>
             <CardDescription>
                Give us a few details and we’ll match you with the right professional.
             </CardDescription>
          </CardHeader>
          <CardContent className="py-8">
            <Autocomplete
              options={allServices}
              value={selectedService}
              onValueChange={(value) => {
                const serviceExists = allServices.some(s => s.value === value);
                setSelectedService(value);
                if (serviceExists) {
                  handleServiceSelect(value);
                }
              }}
              placeholder="What service do you need? e.g. Plumber"
              inputClassName="h-12 text-base w-full justify-between text-muted-foreground font-normal"
            />
          </CardContent>
        </>
      );
    }

    const questionStepIndex = step - 1;
    const isQuestionStep = questionStepIndex >= 0 && questionStepIndex < questions.length;
    const isFinalStep = step === totalSteps;
    
    if (isQuestionStep) {
      const currentQuestion = questions[questionStepIndex];
      if (!currentQuestion) {
          setStep(totalSteps);
          return null;
      }

      const isNextButtonDisabled = () => {
        if(currentQuestion.type === 'textarea') return false; 
        if(currentQuestion.type === 'location' && (formData['city'] || formData['suburb'])) return false;

        const value = formData[currentQuestion.id];
        if (currentQuestion.type === 'checkbox') {
          return !value || (Array.isArray(value) && value.length === 0);
        }
        return !value;
      };

      return (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <CardHeader className='text-left bg-secondary/50'>
              <div className="flex items-center gap-4 mb-4">
                  <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                    <ArrowLeft />
                  </Button>
                  <div>
                    <h2 className="text-xl">Request for {serviceLabel}</h2>
                    <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
                  </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>

            {serviceImage && questionStepIndex === 0 && (
              <div className="relative h-32 w-full">
                <Image
                  src={serviceImage.imageUrl}
                  alt={serviceImage.description || ''}
                  fill
                  className="object-cover"
                  data-ai-hint={serviceImage.imageHint}
                />
              </div>
            )}
            
          <CardContent className="py-8 min-h-[300px]">
            <h3 className="mb-4 text-lg">{currentQuestion.text}</h3>
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
             {currentQuestion.type === 'location' && (
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                            id="city" 
                            placeholder="e.g. Johannesburg" 
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            defaultValue={formData['city'] as string || locationValue}
                        />
                    </div>
                    <div>
                        <Label htmlFor="suburb">Suburb</Label>
                        <Autocomplete
                            options={allLocations}
                            value={formData['suburb'] as string || ''}
                            onValueChange={(value) => {
                                const location = allLocations.find(l => l.value === value);
                                handleInputChange('suburb', location?.label || value);
                            }}
                            placeholder="Type to search your suburb..."
                        />
                    </div>
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
          </CardContent>
          <div className="flex justify-between items-center p-6 border-t">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
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
          <CardHeader className="text-left bg-secondary/50">
            <div className="flex items-center gap-4 mb-4">
              <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                <ArrowLeft />
              </Button>
              <div>
                <h2 className="text-xl">We're almost done, we just need your details.</h2>
                 <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent className="py-8 space-y-4">
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
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                />
                <Label htmlFor="terms" className="text-xs text-muted-foreground font-normal">
                    I agree to Gaupro’s <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </Label>
            </div>
          </CardContent>
          <div className="flex justify-between items-center p-6 border-t">
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
    <>
      <Header />
      <main className="flex-grow bg-secondary/30">
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-2xl mx-auto">
                <Card className="overflow-hidden">
                    {renderStepContent()}
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
