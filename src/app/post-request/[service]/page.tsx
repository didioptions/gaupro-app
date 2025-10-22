
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { serviceQuestionSets, allServices } from '@/lib/service-questions';
import { FileUpload } from '@/components/ui/file-upload';
import { ArrowLeft } from 'lucide-react';

type FormData = {
  [key: string]: string | File[];
};

export default function ServiceRequestFormPage() {
  const params = useParams();
  const serviceSlug = Array.isArray(params.service) ? params.service[0] : params.service;

  const service = allServices.find(s => s.value === serviceSlug);
  const questionSet = serviceQuestionSets.find(qs => qs.service === serviceSlug);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const totalSteps = questionSet ? questionSet.questions.length + 1 : 2;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (questionId: string, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    // Here you would typically send the data to your backend
    alert('Request Submitted! (See console for data)');
  };
  
  if (!service) {
    return (
      <>
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <p>Service not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  const renderCurrentStep = () => {
    // If there are no specific questions, go straight to contact info
    if (!questionSet || step > questionSet.questions.length) {
      return (
        <div className="space-y-6">
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
      );
    }
    
    const currentQuestion = questionSet.questions[step - 1];

    switch (currentQuestion.type) {
      case 'radio':
        return (
          <RadioGroup onValueChange={value => handleInputChange(currentQuestion.id, value)}>
            <div className="space-y-3">
              {currentQuestion.options?.map(option => (
                <div className="flex items-center" key={option.value}>
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="pl-3 font-normal cursor-pointer text-base">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        );
      case 'textarea':
        return (
          <Textarea 
            placeholder={currentQuestion.placeholder}
            rows={5}
            onChange={e => handleInputChange(currentQuestion.id, e.target.value)}
          />
        )
      default:
        return <p>Unknown question type</p>;
    }
  };

  const getStepTitle = () => {
    if (!questionSet || step > questionSet.questions.length) {
      return "Finally, your contact details";
    }
    return questionSet.questions[step - 1].text;
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-secondary/50 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Progress value={progress} className="mb-4 h-2" />
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                {step > 1 && (
                  <Button variant="ghost" size="icon" onClick={handleBack} aria-label="Go back">
                    <ArrowLeft />
                  </Button>
                )}
                <div>
                    <CardDescription>Request for {service.label}</CardDescription>
                    <CardTitle className="text-2xl">{getStepTitle()}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="min-h-[300px]">
                  {renderCurrentStep()}
                </div>
                <div className="mt-8 flex justify-end">
                  {step < totalSteps ? (
                    <Button type="button" onClick={handleNext} size="lg">Next</Button>
                  ) : (
                    <Button type="submit" size="lg">Submit Request</Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
