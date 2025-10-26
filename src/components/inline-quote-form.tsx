
'use client';

import React, { useState } from 'react';
import { serviceQuestionSets } from '@/lib/service-questions';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RequestQuoteDialog } from './request-quote-dialog';

interface InlineQuoteFormProps {
  service: string;
}

export default function InlineQuoteForm({ service }: InlineQuoteFormProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const questionSet = serviceQuestionSets.find((qs) => qs.service === service);
  const firstQuestion = questionSet?.questions?.[0];

  if (!firstQuestion || firstQuestion.type !== 'radio') {
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
        <h3 className="font-semibold mb-4 text-lg">{firstQuestion.text}</h3>
        <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3 mb-6">
          {firstQuestion.options?.map((option) => (
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
        
        <RequestQuoteDialog
            service={service}
            initialStep={1}
            initialData={initialData}
        >
            <Button 
                type="button" 
                size="lg" 
                className="w-full h-12 text-base" 
                variant="destructive"
                disabled={!selectedOption}
            >
                Get Free Quotes
            </Button>
        </RequestQuoteDialog>

        <p className="text-xs text-muted-foreground mt-2 text-center">From verified businesses and trade professionals</p>
      </CardContent>
    </Card>>
  );
}
