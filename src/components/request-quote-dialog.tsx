
'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import { ArrowLeft, X, Loader2 } from 'lucide-react';
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
import { Autocomplete } from './ui/autocomplete';
import { allLocations } from '@/lib/locations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useUser, useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [locationLabel, setLocationLabel] = useState('');
  const [locationSlug, setLocationSlug] = useState('');

  const { user } = useUser();
  const db = useFirestore();
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      setStep(initialStep);
      setSelectedService(service);
      setFormData(initialData);
      setIsSubmitted(false);
      setIsSubmitting(false);
      setAgreedToTerms(false);
      setLocationLabel('');
      setLocationSlug('');
    }
  }, [open, initialStep, service, initialData]);

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = (questions?.length || 0);
  const progress = step > 0 ? ((step) / (totalSteps)) * 100 : 0;

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
        handleInputChange(questionId, currentValues.filter((v: string) => v !== optionValue));
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    handleInputChange('urgency_date', selectedDate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
        toast({
            variant: 'destructive',
            title: 'Agreement Required',
            description: 'You must agree to the Terms of Service and Privacy Policy to continue.',
        });
        return;
    }

    if (!db) return;

    setIsSubmitting(true);

    const leadId = Math.random().toString(36).substring(7);
    
    let fullDescription = (formData.job_details as string) || "";
    if (!fullDescription) {
        const answers = Object.entries(formData)
            .filter(([key]) => !['firstName', 'lastName', 'email', 'phoneNumber', 'contactTime', 'suburb', 'city', 'urgency', 'urgency_date', 'budget'].includes(key))
            .map(([key, val]) => `${key.replace(/_/g, ' ')}: ${Array.isArray(val) ? val.join(', ') : val}`)
            .join('\n');
        fullDescription = answers || "No description provided";
    }

    const publicData = {
        category: allServices.find(s => s.value === selectedService)?.label || selectedService,
        description: fullDescription,
        location: (formData.suburb as string) || (formData.city as string) || locationLabel || "Unknown",
        locationSlug: locationSlug || "unknown",
        dateNeeded: formData.urgency === 'specific_date' ? (formData.urgency_date instanceof Date ? formData.urgency_date.toISOString() : String(formData.urgency_date)) : (formData.urgency || "Flexible"),
        status: 'pending_review',
        budget: (formData.budget as string) || "Quote Required",
        createdAt: serverTimestamp(),
        userId: user?.uid || 'guest',
        credits: 3,
        purchasers: [],
        quoteCount: 0
    };

    const privateData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email || '',
        customerPhone: formData.phoneNumber || '',
        contactTime: formData.contactTime || 'anytime',
        createdAt: serverTimestamp(),
        userId: user?.uid || 'guest',
    };

    try {
        await setDoc(doc(db, 'leads_public', leadId), publicData);
        await setDoc(doc(db, 'leads_private', leadId), privateData);
        setIsSubmitted(true);
    } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Submission Failed',
            description: error.message || 'There was an error submitting your request. Please try again.',
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    const serviceLabel = allServices.find((s) => s.value === selectedService)?.label;

    if (isSubmitted) {
      return (
        <div className="flex flex-col h-full">
            <DialogHeader className="p-4 border-b">
              <DialogTitle className="text-xl text-center">✅ Your Request Has Been Received</DialogTitle>
            </DialogHeader>
          <div className="flex-grow p-6 text-foreground space-y-4 text-left overflow-y-auto">
            <p>
              Thanks for posting your job on Gaupro — we’re already matching you with trusted local professionals.
            </p>
             <p className="font-semibold pt-2">Here’s What Happens Next:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>Receive quotes from qualified service providers — usually in less than 20 minutes.</li>
                <li>Compare prices, view profiles, and read verified customer reviews.</li>
                <li>Chat or call the pros directly to discuss your needs or ask questions.</li>
                <li>Hire your favorite pro, agree on the details, and get your project done!</li>
            </ol>
          </div>
          <div className="p-4 border-t">
              <Button onClick={() => setOpen(false)} className="w-full">
                Done
              </Button>
          </div>
        </div>
      );
    }

    const questionStepIndex = step;
    const isQuestionStep = questionStepIndex >= 0 && questionStepIndex < questions.length;
    const isFinalStep = step === totalSteps;
    
    if (isQuestionStep) {
      const currentQuestion = questions[questionStepIndex];
       if (!currentQuestion) {
          setStep(totalSteps);
          return null;
      }

      const isNextButtonDisabled = () => {
        if (currentQuestion.type === 'textarea' || currentQuestion.type === 'location') return false;
        const value = formData[currentQuestion.id];
        if (currentQuestion.type === 'checkbox') {
          return !value || (Array.isArray(value) && value.length === 0);
        }
        return !value;
      };

      return (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="flex flex-col h-full">
            <DialogHeader className='text-left p-4 border-b'>
                <DialogTitle>
                  <div className="flex items-center gap-4">
                      {step > 0 && <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                        <ArrowLeft />
                      </Button>}
                       <div className={step === 0 ? 'w-full text-center' : ''}>
                         <h2 className="text-xl">Request for {serviceLabel}</h2>
                         <p className="text-muted-foreground text-sm">Step {step + 1} of {totalSteps + 1}</p>
                       </div>
                  </div>
                </DialogTitle>
            </DialogHeader>
            <div className="flex-grow overflow-y-auto">
                <div className="p-6">
                    {serviceImage && questionStepIndex === 0 && (
                      <div className="relative h-32 w-full mb-4">
                        <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description || ''}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                    )}
                    
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
                                    defaultValue={formData['city'] as string | undefined}
                                />
                            </div>
                            <div>
                                <Label htmlFor="suburb">Suburb</Label>
                                <Autocomplete
                                    options={allLocations}
                                    value={locationSlug}
                                    onValueChange={(value: string) => {
                                        const location = allLocations.find(l => l.value === value);
                                        const label = location?.label || value;
                                        setLocationSlug(value);
                                        setLocationLabel(label);
                                        handleInputChange('suburb', label);
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
                </div>
            </div>
          <div className="flex justify-between items-center p-4 border-t">
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
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <DialogHeader className="text-left p-4 border-b">
            <DialogTitle>
                <div className="flex items-center gap-4">
                <Button type="button" variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                    <ArrowLeft />
                </Button>
                <div>
                    <h2 className="text-xl">Almost done, we just need your details.</h2>
                    <p className="text-muted-foreground text-sm">Step {totalSteps + 1} of {totalSteps + 1}</p>
                </div>
                </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-grow p-6 space-y-4 overflow-y-auto">
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
                    <Select onValueChange={(value: string) => handleInputChange('contactTime', value)} defaultValue="anytime">
                      <SelectTrigger>
                        <SelectValue placeholder="Contact me..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anytime">Contact me Anytime</SelectItem>
                        <SelectItem value="mornings">Mornings Only</SelectItem>
                        <SelectItem value="afternoons">Afternoons Only</SelectItem>
                        <SelectItem value="evenings">Evenings Only</SelectItem>
                      </SelectContent>
                    </Select>
                 </div>
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
          <div className="flex justify-between items-center p-4 border-t">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button size="lg" type="submit" className="bg-red-600 hover:bg-red-700" disabled={!agreedToTerms || isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {isSubmitting ? 'Submitting...' : 'Get Quotes'}
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
      <DialogContent className="sm:max-w-lg p-0 border-0 flex flex-col h-[90vh] max-h-[700px]">
        <AlertDialog>
          <AlertDialogTrigger asChild>
             <button className="absolute right-4 top-3 z-10 p-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
             </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to cancel the request?</AlertDialogTitle>
                  <AlertDialogDescription>
                      Don't stop now. You're {Math.round(progress)}% done with your request.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setOpen(false)}>Cancel Request</AlertDialogAction>
                  <AlertDialogCancel asChild>
                    <Button variant="outline">Continue Request</Button>
                  </AlertDialogCancel>
              </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {step > 0 && !isSubmitted && <Progress value={progress} className="h-1 rounded-none absolute top-0 left-0 right-0" />}
        {renderStepContent()}
      </DialogContent>
    </Dialog>
  );
}
