'use client';

import {
  AlertCircle,
  Clock,
  MapPin,
  RefreshCw,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const lead = {
  initials: 'EH',
  name: 'Ernst H',
  time: '7 hours ago',
  purchased: '2 Pros Purchased',
  title: 'Rubble Removal Companies',
  location: 'Germiston, Elspark',
  timeframe: 'In the next few days',
  request:
    'Request for Rubble Removal Companies. - rubble removal broken concrete, some tree branches and a tire or 5',
  details: [
    {
      question: 'What would you like removed?',
      answer: 'Garden Refuse, Building rubble',
    },
    {
      question: 'How much of waste needs to be removed?',
      answer: '3 tons',
    },
    { question: 'Is all the waste located in one area?', answer: 'Yes, it is' },
    {
      question: 'What type of property do you have?',
      answer: 'Residential Home',
    },
    { question: 'Choose the status for this project', answer: 'Ready to hire' },
  ],
};

export default function ProDashboardPage() {
  return (
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="new-leads" className="w-full">
          <TabsList>
            <TabsTrigger value="new-leads">New Leads</TabsTrigger>
            <TabsTrigger value="hero-leads">Hero Leads</TabsTrigger>
            <TabsTrigger value="purchased-leads">Purchased Leads</TabsTrigger>
          </TabsList>
          <TabsContent value="new-leads" className="mt-6">
            <div className="flex items-center gap-4 mb-6">
              <Select defaultValue="bravo">
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bravo">bravo projects, Randburg</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>

            <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-800 mb-6">
              <AlertCircle className="h-4 w-4 !text-red-800" />
              <AlertTitle className="font-bold">Action Required</AlertTitle>
              <div className="flex justify-between items-center">
                <AlertDescription className="text-red-700">
                  Your account has limited access. Before we activate your
                  account, we need you to verify your profile to maintain a
                  trusted workplace. We need your ID and utility bill.
                </AlertDescription>
                <Button className="bg-white text-red-800 hover:bg-white/90 border border-red-500">
                  Verify your ID
                </Button>
              </div>
            </Alert>

            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-red-500 text-white">
                      {lead.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold">{lead.name}</p>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  <p>{lead.time}</p>
                  <p>{lead.purchased}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-2">{lead.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{lead.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{lead.timeframe}</span>
                  </div>
                </div>
                <p className="text-sm mb-6">{lead.request}</p>

                <div className="space-y-4 text-sm">
                  {lead.details.map((detail, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4">
                      <p className="text-muted-foreground col-span-1">
                        {detail.question}
                      </p>
                      <p className="font-medium col-span-2">{detail.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <Separator className="my-6" />
              <CardFooter className="justify-end">
                <Button variant="outline">View Details</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="hero-leads">
            <p className="text-muted-foreground">No hero leads yet.</p>
          </TabsContent>
          <TabsContent value="purchased-leads">
            <p className="text-muted-foreground">No purchased leads yet.</p>
          </TabsContent>
        </Tabs>
      </main>
  );
}
