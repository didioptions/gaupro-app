
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/blog-data';

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full my-6">
      {faqItems.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
