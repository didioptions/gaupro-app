
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { serviceQuestionSets, allServices } from '@/lib/service-questions';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RequestQuoteDialog } from '../request-quote-dialog';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import Link from 'next/link';
import { Autocomplete } from '../ui/autocomplete';

type Question = typeof serviceQuestionSets[0]['questions'][0];

export default function HomepageQuoteForm() {
  const [serviceValue, setServiceValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [textareaValue, setTextareaValue] = useState('');

  const questionSet = useMemo(() => {
    if (!serviceValue) return null;
    return (
      serviceQuestionSets.find((qs) => qs.service === serviceValue) ||
      serviceQuestionSets.find((qs) => qs.service === 'default')
    );
  }, [serviceValue]);

  const firstQuestion = questionSet?.questions?.[0];
  const serviceLabel = allServices.find((s) => s.value === serviceValue)?.label;
  const pluralServiceLabel = serviceLabel?.endsWith('s') ? serviceLabel : `${serviceLabel}s`;

  useEffect(() => {
    setSelectedOptions([]);
    setTextareaValue('');
  }, [serviceValue]);

  const handleRadioChange = (value: string) => {
    setSelectedOptions([value]);
  };

  const handleCheckboxChange = (checked: boolean | string, value: string) => {
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };
  
  if (!firstQuestion && serviceValue) {
    return (
        <RequestQuoteDialog service={serviceValue}>
            <Button size="lg" className="w-full mt-4 bg-red-600 hover:bg-red-700">
                Get Free Quotes for {serviceLabel}
            </Button>
        </RequestQuoteDialog>
    )
  }

  const isButtonDisabled = firstQuestion?.type === 'textarea' 
    ? textareaValue.trim() === '' 
    : selectedOptions.length === 0;

  const initialData = firstQuestion ? {
    [firstQuestion.id]: firstQuestion.type === 'textarea'
      ? textareaValue
      : (firstQuestion.type === 'radio' ? selectedOptions[0] : selectedOptions),
  } : {};

  return (
    <Card className="bg-white/90 backdrop-blur-sm text-card-foreground p-4 max-w-2xl mx-auto">
      <CardContent className="p-0">
        <h2 className="text-xl mb-2 text-center">
            {serviceLabel ? `Get quotes for ${pluralServiceLabel?.toLowerCase()}` : 'Get quotes for any service'}
        </h2>
        <p className="text-muted-foreground mb-4 text-sm text-center">
            Answer a few questions and we’ll connect you with the best pros near you.
        </p>

        <Autocomplete
          options={allServices}
          value={serviceValue}
          onValueChange={setServiceValue}
          placeholder="What service do you need? e.g. Plumber"
          inputClassName="h-12 text-base w-full justify-between text-muted-foreground font-normal bg-white border rounded-md px-3 py-2"
        />

        {firstQuestion && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2 text-base">{firstQuestion.text}</h3>
            {firstQuestion.type === 'radio' && firstQuestion.options && (
              <RadioGroup value={selectedOptions[0]} onValueChange={handleRadioChange} className="space-y-2 mb-4">
                {firstQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center p-2 border rounded-md bg-white has-[:checked]:bg-blue-50 has-[:checked]:border-primary">
                    <RadioGroupItem value={option.value} id={`hero-${option.value}`} />
                    <Label htmlFor={`hero-${option.value}`} className="pl-2 font-normal cursor-pointer text-sm">{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            {firstQuestion.type === 'checkbox' && firstQuestion.options && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                {firstQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <Checkbox id={`hero-${option.value}`} checked={selectedOptions.includes(option.value)} onCheckedChange={(checked) => handleCheckboxChange(checked, option.value)} />
                    <Label htmlFor={`hero-${option.value}`} className="pl-2 font-normal cursor-pointer text-sm">{option.label}</Label>
                  </div>
                ))}
              </div>
            )}
            {firstQuestion.type === 'textarea' && (
              <Textarea
                id={`hero-${firstQuestion.id}`}
                placeholder={firstQuestion.placeholder}
                rows={5}
                onChange={(e) => handleTextareaChange(e.target.value)}
                value={textareaValue}
                className="mb-4 bg-white"
              />
            )}
            
            <RequestQuoteDialog
                service={serviceValue}
                initialStep={1}
                initialData={initialData}
            >
                <Button 
                    type="button" 
                    size="lg" 
                    className="w-full h-12 text-base bg-red-600 hover:bg-red-700" 
                    disabled={isButtonDisabled}
                >
                    Get Free Quotes
                </Button>
            </RequestQuoteDialog>
          </div>
        )}

        {!serviceValue && (
            <Button asChild size="lg" className="w-full mt-4 h-12 text-base">
                <Link href="/post-request">Get Started</Link>
            </Button>
        )}
      </CardContent>
    </Card>
  );
}
