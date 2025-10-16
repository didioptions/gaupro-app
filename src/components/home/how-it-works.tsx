import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, MessageSquareQuote, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary mb-4" />,
    title: "1. Tell us what you need",
    description: "Submit a job request with details about your project. It's fast and free.",
  },
  {
    icon: <MessageSquareQuote className="h-10 w-10 text-primary mb-4" />,
    title: "2. Get quotes",
    description: "Receive competitive quotes from local pros who are ready to help.",
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-primary mb-4" />,
    title: "3. Compare & hire",
    description: "Review profiles, ratings, and quotes to choose the best pro for your job.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div aria-hidden="true" className="hidden md:block absolute top-12 left-0 w-full h-px">
             <svg width="100%" height="2" className="absolute" style={{top: "2.5rem"}}>
              <line x1="15%" y1="1" x2="85%" y2="1" strokeWidth="2" strokeDasharray="8, 8" className="stroke-border" />
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="z-10">
              <Card className="text-center p-8 bg-background border-0 h-full">
                <CardHeader className="p-0 items-center">
                  {step.icon}
                  <CardTitle className="mb-2 text-xl font-bold">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
