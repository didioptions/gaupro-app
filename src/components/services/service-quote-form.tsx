
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { serviceQuestionSets, Question } from '@/lib/service-questions';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';

interface ServiceQuoteFormProps {
    service: string;
    serviceLabel: string;
}

export default function ServiceQuoteForm({ service, serviceLabel }: ServiceQuoteFormProps) {
    const questionSet = serviceQuestionSets.find(qs => qs.service === service);

    const renderQuestion = (question: Question) => {
        if (question.type === 'radio') {
            return (
                <RadioGroup key={question.id}>
                    <div className="space-y-3">
                        {question.options?.map(option => (
                            <div key={option.value} className="flex items-center">
                                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                                <Label htmlFor={`${question.id}-${option.value}`} className="pl-3 font-normal cursor-pointer text-base">
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </RadioGroup>
            )
        }
        if (question.type === 'textarea') {
            return <Textarea key={question.id} placeholder={question.placeholder} rows={4} />
        }
        return null;
    }

    return (
        <Card className="max-w-md bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-2xl font-bold">Get quotes for {serviceLabel}s in Johannesburg</h1>
                        <p className="text-sm text-muted-foreground mt-1">Answer a few questions and we'll connect you with the best pros for {serviceLabel}s near you.</p>
                    </div>
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 border-cyan-200">2 near you</Badge>
                </div>

                <form className="space-y-6">
                    {questionSet && questionSet.questions.map(q => (
                         <div key={q.id}>
                            <h2 className="font-semibold mb-3">{q.text}</h2>
                            {renderQuestion(q)}
                         </div>
                    ))}
                    {!questionSet && <p className="text-muted-foreground">No specific questions for this service yet.</p>}

                    <Button type="submit" size="lg" className="w-full h-12 text-lg" variant="destructive">
                        Get Free Quotes
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">From verified businesses and trade professionals</p>
                </form>
            </CardContent>
        </Card>
    );
}
