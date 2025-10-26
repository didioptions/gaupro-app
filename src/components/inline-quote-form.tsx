
'use client';

import React, { useState } from 'react';
import { serviceQuestionSets, allServices } from '@/lib/service-questions';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RequestQuoteDialog } from './request-quote-dialog';
import { Badge } from './ui/badge';

interface InlineQuoteFormProps {
  service: string;
  location: string;
}

export default function InlineQuoteForm({ service, location }: InlineQuoteFormProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const questionSet =
    serviceQuestionSets.find((qs) => qs.service === service) ||
    serviceQuestionSets.find((qs) => qs.service === 'default');

  const firstQuestion = questionSet?.questions?.[0];
  const serviceInfo = allServices.find(s => s.value === service);
  const serviceLabel = serviceInfo?.label || service;
  // Improved pluralization
  const pluralServiceLabel = serviceLabel.endsWith('s') ? serviceLabel : `${serviceLabel}s`;


  // This check should now always find a question, thanks to the default fallback.
  if (!firstQuestion) {
    // This fallback will rarely be used, but is safe to keep.
    return (
        <RequestQuoteDialog service={service}>
            <Button size="lg" variant="destructive" className="mt-8 text-lg px-10 h-14">
                Get Free Quotes
            </Button>
        </RequestQuoteDialog>
    );
  }

  const initialData = {
    [firstQuestion.id]: selectedOption,
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm text-card-foreground p-6">
      <CardContent className="p-0">
        <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-1">Get quotes for {pluralServiceLabel.toLowerCase()} in {location}</h2>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-200 whitespace-nowrap">37 near you</Badge>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">Answer a few questions and we’ll connect you with the best pros for {pluralServiceLabel.toLowerCase()} near you.</p>
        
        <h3 className="font-semibold mb-4 text-lg">{firstQuestion.text}</h3>
        {firstQuestion.type === 'radio' && firstQuestion.options ? (
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3 mb-6">
            {firstQuestion.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center p-3 border rounded-md bg-white has-[:checked]:bg-blue-50 has-[:checked]:border-primary"
              >
                <RadioGroupItem value={option.value} id={`inline-${option.value}`} />
                <Label
                  htmlFor={`inline-${option.value}`}
                  className="pl-3 font-normal cursor-pointer text-base"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
           // Fallback for non-radio questions, though the default is radio.
          <p className="text-muted-foreground mb-6">Tell us about your project to get started.</p>
        )}
        
        {/* The Dialog Trigger is the button. When clicked, it opens the dialog. */}
        <RequestQuoteDialog
            service={service}
            initialStep={1} // Start at step 1 (the second question)
            initialData={initialData} // Pass the pre-selected data
        >
            <Button 
                type="button" 
                size="lg" 
                className="w-full h-12 text-base" 
                variant="destructive"
                disabled={firstQuestion.type === 'radio' && !selectedOption}
            >
                Get Free Quotes
            </Button>
        </RequestQuoteDialog>

        <p className="text-xs text-muted-foreground mt-2 text-center">From verified businesses and trade professionals</p>
      </CardContent>
    </Card>
  );
}
