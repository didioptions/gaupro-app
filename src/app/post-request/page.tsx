'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';

// Placeholder components for each step
const Step1Service = ({ onNext }: { onNext: () => void }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">What service do you need?</h2>
    <p className="text-muted-foreground">
      Start by telling us the type of service you're looking for.
    </p>
    {/* Will be replaced with autocomplete input */}
    <input
      type="text"
      placeholder="e.g., Plumber, Electrician, Builder"
      className="w-full h-12 px-4 rounded-md border"
    />
    <Button onClick={onNext} className="w-full md:w-auto">
      Next
    </Button>
  </div>
);

const Step2Location = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Where are you located?</h2>
    <p className="text-muted-foreground">
      This helps us find professionals in your area.
    </p>
    <input
      type="text"
      placeholder="Enter your postal code or city"
      className="w-full h-12 px-4 rounded-md border"
    />
    <div className="flex gap-4">
      <Button variant="outline" onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  </div>
);

const Step3Details = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tell us about your project</h2>
      <p className="text-muted-foreground">
        The more details you provide, the better quotes you'll get.
      </p>
      <textarea
        placeholder="Describe your project in detail..."
        className="w-full p-4 rounded-md border min-h-[150px]"
      />
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Upload photos (optional)
        </label>
        <input
          type="file"
          multiple
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
        />
        <p className="text-xs text-muted-foreground mt-1">You can upload multiple images to help pros understand the job.</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
  

const Step4Contact = ({ onBack }: { onBack: () => void }) => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold">Almost there!</h2>
        <p className="text-muted-foreground">
            Sign up or log in to post your request and get quotes from trusted pros.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 p-6 border rounded-lg">
                <h3 className="font-semibold text-lg">New to Gaupro?</h3>
                <input placeholder="Name" className="w-full h-11 px-4 rounded-md border" />
                <input placeholder="Email" type="email" className="w-full h-11 px-4 rounded-md border" />
                <input placeholder="Phone" type="tel" className="w-full h-11 px-4 rounded-md border" />
                <input placeholder="Password" type="password" className="w-full h-11 px-4 rounded-md border" />
                <Button className="w-full">Create Account & Post Request</Button>
            </div>
            <div className="space-y-4 p-6 border rounded-lg">
                <h3 className="font-semibold text-lg">Already have an account?</h3>
                <input placeholder="Email" type="email" className="w-full h-11 px-4 rounded-md border" />
                <input placeholder="Password" type="password" className="w-full h-11 px-4 rounded-md border" />
                <Button className="w-full">Login & Post Request</Button>
            </div>
        </div>
         <div className="flex gap-4">
            <Button variant="outline" onClick={onBack}>Back</Button>
        </div>
    </div>
);


export default function PostRequestPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    {step > 1 && (
                        <Button variant="ghost" onClick={prevStep} className="mb-4">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                    )}
                    <div className="flex items-center gap-4">
                        <Progress value={progress} className="h-2" />
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Step {step} of {totalSteps}</span>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 min-h-[400px]">
                    {step === 1 && <Step1Service onNext={nextStep} />}
                    {step === 2 && <Step2Location onNext={nextStep} onBack={prevStep} />}
                    {step === 3 && <Step3Details onNext={nextStep} onBack={prevStep} />}
                    {step === 4 && <Step4Contact onBack={prevStep} />}
                </div>
            </div>
        </div>
    </div>
  );
}
