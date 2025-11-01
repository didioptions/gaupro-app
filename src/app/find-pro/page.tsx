
'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, Bot } from 'lucide-react';
import {
  matchServiceRequestsWithProfessionals,
  type MatchServiceRequestsInput,
  type MatchServiceRequestsOutput,
} from '@/ai/flows/match-service-requests-with-professionals';
import { allProfessionals } from '@/lib/professionals-data';
import ProfessionalCard from '@/components/services/professional-card';
import { Professional } from '@/components/services/professional-card';

// Correctly flatten the allProfessionals object while preserving the category
const allProsArray = Object.entries(allProfessionals).flatMap(([category, pros]) => 
  (pros as Professional[]).map(pro => ({
    ...pro,
    serviceCategory: category // Attach the category to each pro object
  }))
);


export default function FindProPage() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [matchedPros, setMatchedPros] = useState<MatchServiceRequestsOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !location) {
      setError('Please fill in both the job description and your location.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setMatchedPros(null);

    const professionalProfilesForAI = allProsArray.map((pro) => ({
      name: pro.name,
      skills: pro.tags || [pro.serviceCategory], // Use tags if available, otherwise fallback to serviceCategory
      location: pro.location,
      availability: 'Available', // Placeholder
    }));

    const input: MatchServiceRequestsInput = {
      serviceRequestDescription: description,
      userLocation: location,
      professionalProfiles: professionalProfilesForAI,
    };

    try {
      const result = await matchServiceRequestsWithProfessionals(input);
      setMatchedPros(result);
    } catch (err) {
      console.error('AI matching failed:', err);
      setError('Sorry, something went wrong while finding matches. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Create a map for quick lookup of full professional data
  const proDataMap = useMemo(() => {
    const map = new Map<string, Professional>();
    allProsArray.forEach(pro => map.set(pro.name, pro));
    return map;
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow bg-secondary/50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-normal">
                  Find the Perfect Pro with AI
                </CardTitle>
                <p className="text-muted-foreground">
                  Describe your job, and our AI will find the best-matched professionals for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base">What do you need done?</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g., 'I need a reliable plumber to fix a leaking kitchen tap and check the pressure of my geyser.'"
                      rows={5}
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base">Where are you located?</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., 'Sandton, Johannesburg'"
                      className="text-base"
                    />
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <Button type="submit" size="lg" className="w-full text-lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Finding Matches...
                      </>
                    ) : (
                      'Find My Pro'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {matchedPros && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Here are your AI-powered matches!
                </h2>
                <div className="space-y-6">
                  {matchedPros.length > 0 ? (
                    matchedPros.map((match, index) => {
                      const fullProData = proDataMap.get(match.name);
                      if (!fullProData) return null;

                      return (
                        <div key={index}>
                           <Alert className="mb-2 bg-blue-50 border-blue-200 text-blue-900">
                             <Bot className="h-4 w-4 !text-blue-900" />
                             <AlertTitle className="font-semibold">AI Match Reason (Score: {match.matchScore}/100)</AlertTitle>
                             <AlertDescription>
                               {match.reason}
                             </AlertDescription>
                           </Alert>
                           <ProfessionalCard professional={fullProData} service={fullProData.serviceCategory} />
                        </div>
                      );
                    })
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-lg text-muted-foreground">
                          Our AI couldn't find a strong match based on your request.
                        </p>
                        <p className="mt-2">Try adding more details to your job description for better results.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
