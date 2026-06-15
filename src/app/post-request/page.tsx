
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { Autocomplete } from '@/components/ui/autocomplete';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { allLocations } from '@/lib/locations';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useUser, useFirestore } from '@/firebase';

type FormData = {
  [key: string]: string | string[] | File[] | boolean | Date | undefined;
};

const whyChooseGaupro = [
    {
        icon: '🆓',
        title: 'No fees',
        description: 'Gaupro is completely free to use! Simply submit your service request, and professionals will reach out with quotes—no hidden costs, no surprises.'
    },
    {
        icon: '📊',
        title: 'Compare quotes',
        description: 'Receive multiple estimates from qualified professionals so you can easily compare prices and choose the option that fits your budget. Know exactly what your project will cost before you hire anyone.'
    },
    {
        icon: '👍',
        title: 'Trusted hiring',
        description: 'Hire with confidence! Every professional on Gaupro has ratings, reviews, photos, and a record of completed jobs. You can see their work history and make an informed choice, ensuring quality and reliability every time.'
    },
    {
        icon: '✨',
        title: 'Save time and effort',
        description: 'No more endlessly searching for service providers or cold-calling companies. Gaupro connects you directly to trusted professionals in your area, making the process fast and stress-free.'
    },
    {
        icon: '🔒',
        title: 'Safe and reliable',
        description: 'All professionals are verified and vetted, so you can trust that your project is in capable hands.'
    }
];

function PostRequestContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useUser();
  const db = useFirestore();
  
  const serviceQuery = searchParams.get('service') || '';
  const locationQuery = searchParams.get('location') || '';

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(serviceQuery);
  const [formData, setFormData] = useState<FormData>({});
  const [date, setDate] = useState<Date | undefined>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const initialLocation = locationQuery.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const [locationValue, setLocationValue] = useState(initialLocation);

  useEffect(() => {
    if (serviceQuery) {
      setStep(1);
      setSelectedService(serviceQuery);
    }
     if (locationQuery) {
      const locationLabel = allLocations.find(l => l.value === locationQuery)?.label || initialLocation;
      setLocationValue(locationLabel);
      setFormData(prev => ({ ...prev, suburb: locationLabel, city: '' }));
    }
  }, [serviceQuery, locationQuery, initialLocation]);

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === selectedService) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const questions = questionSet?.questions || [];
  const totalSteps = (questions?.length || 0) + 1;
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

  const handleClose = () => {
    router.push('/');
  }

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
        alert("You must agree to the Terms of Service and Privacy Policy.");
        return;
    }

    if (!db) return;

    setIsSubmitting(true);

    const leadData = {
        category: allServices.find(s => s.value === selectedService)?.label || selectedService,
        description: (formData.job_details as string) || "No description provided",
        location: (formData.suburb as string) || (formData.city as string) || locationValue || "Unknown",
        dateNeeded: formData.urgency === 'specific_date' ? (formData.urgency_date instanceof Date ? formData.urgency_date.toISOString() : String(formData.urgency_date)) : (formData.urgency || "Flexible"),
        status: 'Open',
        budget: (formData.budget as string) || "Quote Required",
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email || '',
        customerPhone: formData.phoneNumber || '',
        contactTime: formData.contactTime || 'anytime',
        createdAt: serverTimestamp(),
        userId: user?.uid || 'guest'
    };

    try {
        const parentPath = user ? `users/${user.uid}` : `users/GUEST_${Date.now()}`;
        const leadsRef = collection(db, parentPath, 'serviceRequests');
        await addDoc(leadsRef, leadData);
        setIsSubmitted(true);
    } catch (error: any) {
        console.error('Error saving lead:', error);
        alert("There was an error submitting your request: " + error.message);
    } finally {
        setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    const serviceLabel = allServices.find((s) => s.value === selectedService)?.label;

    if (isSubmitted) {
      return (
        <div className="text-center py-8 px-6">
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
          </div>
          <Button asChild className="mt-8 w-full sm:w-auto">
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
              onValueChange={(value: string) => {
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
    
    const ConfirmationDialog = (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2">
            <X className="h-5 w-5" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
            <AlertDialogDescription>
              You're about {Math.round(progress)}% done. If you cancel now, your progress will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Request</AlertDialogCancel>
            <AlertDialogAction onClick={handleClose}>Cancel Request</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    if (isQuestionStep) {
      const currentQuestion = questions[questionStepIndex];
      if (!currentQuestion) {
          setStep(totalSteps);
          return null;
      }

      const isNextButtonDisabled = () => {
        if(currentQuestion.type === 'textarea' || currentQuestion.type === 'location') return false; 

        const value = formData[currentQuestion.id];
        if (currentQuestion.type === 'checkbox') {
          return !value || (Array.isArray(value) && value.length === 0);
        }
        return !value;
      };

      return (
        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            <CardHeader className='text-left bg-secondary/50 relative'>
              {ConfirmationDialog}
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
                onValueChange={(value: string) => handleInputChange(currentQuestion.id, value)}
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
                            onValueChange={(value: string) => {
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
          <CardHeader className="text-left bg-secondary/50 relative">
             {ConfirmationDialog}
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
            <Button size="lg" type="submit" className="bg-red-600 hover:bg-red-700" disabled={!agreedToTerms || isSubmitting}>
               {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
               {isSubmitting ? 'Submitting...' : 'Get Quotes'}
            </Button>
          </div>
        </form>
      );
    }
    
    return null;
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="overflow-hidden">
          {renderStepContent()}
      </Card>
      {!isSubmitted && (
        <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl text-center mb-8 font-normal">Why choose Gaupro for reliable service?</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {whyChooseGaupro.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      )}
    </div>
  );
}

export default function PostRequestPage() {
  return (
    <main className="flex-grow bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
          <Suspense fallback={<div className="text-center py-20">Loading request form...</div>}>
            <PostRequestContent />
          </Suspense>
      </div>
    </main>
  );
}
