import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, MessageSquareQuote, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "1. Tell us what you need",
    description: "Submit a job request with details about your project. It's fast and free.",
  },
  {
    icon: <MessageSquareQuote className="h-8 w-8 text-primary" />,
    title: "2. Get quotes",
    description: "Receive competitive quotes from local pros who are ready to help.",
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: "3. Compare & hire",
    description: "Review profiles, ratings, and quotes to choose the best pro for your job.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-12 font-headline">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <Card className="text-center p-8 bg-card shadow-sm h-full border-0">
                <CardHeader className="p-0 items-center">
                   <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="mb-2 text-xl font-bold">{step.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
