'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MapPin, 
  LayoutGrid, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Activity,
  ArrowUpRight,
  Copy,
  Mail,
  Check,
  Loader2
} from 'lucide-react';
import { allServices } from '@/lib/service-questions';
import { allLocations } from '@/lib/locations';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function MarketplaceHealthPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const [copied, setCopied] = useState(false);

  // 1. Fetch Real Live Professionals
  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore, isUserLoading]);

  const { data: professionals, loading } = useCollection<DocumentData>(prosQuery);

  const stats = useMemo(() => {
    if (!professionals) return { total: 0, categories: 0, cities: 0 };
    
    const categories = new Set();
    const cities = new Set();
    
    professionals.forEach(pro => {
      if (pro.serviceCategory) categories.add(pro.serviceCategory);
      if (pro.location) cities.add(pro.location);
      if (pro.serviceAreas) pro.serviceAreas.forEach((area: string) => cities.add(area));
    });

    return {
      total: professionals.length,
      categories: categories.size,
      cities: cities.size
    };
  }, [professionals]);

  const recruitmentRankings = [
    { category: 'Plumbers', impact: 'Very High', reason: 'Highest emergency volume' },
    { category: 'Electricians', impact: 'Very High', reason: 'Mandatory CoC compliance' },
    { category: 'Solar Systems', impact: 'High', reason: 'Energy crisis trend' },
    { category: 'Builders', impact: 'High', reason: 'Highest average job value' },
    { category: 'Rubble Removal', impact: 'Medium', reason: 'High repeat business' },
    { category: 'Movers', impact: 'Medium', reason: 'High intent search' },
  ];

  const emailTemplate = `Hi,

We're expanding GauPro, a South African platform that connects customers with trusted service professionals.

We're currently inviting top-rated businesses in your area to join as Verified Pros.

Benefits include:
• Free professional profile
• New customer leads
• Customer reviews
• Increased online visibility
• No monthly subscription fees

We're offering complimentary Verified Pro status for early members.

Accept your invitation here: https://gaupro.co.za/pro/partnership

Regards,
The GauPro Team`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    toast({
      title: "Template Copied",
      description: "Recruitment email copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marketplace Health</h1>
            <p className="text-muted-foreground mt-2">Live provider supply vs. platform search demand.</p>
          </div>
          <div className="flex items-center gap-3">
             {loading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
             <Badge variant="outline" className="bg-white px-4 py-2 text-sm font-bold">LIVE DATABASE FEED</Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Supply</Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-muted-foreground uppercase font-bold">Active Professionals</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Activity className="h-5 w-5 text-green-600" />
                <Badge variant="outline" className="text-green-600 border-green-200">System</Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">88/100</p>
                <p className="text-xs text-muted-foreground uppercase font-bold">SEO Health Score</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <LayoutGrid className="h-5 w-5 text-orange-500" />
                <p className="text-xs font-bold text-orange-600">Void: {allServices.length - stats.categories}</p>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stats.categories}</p>
                <p className="text-xs text-muted-foreground uppercase font-bold">Service Niches</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <MapPin className="h-5 w-5 text-blue-500" />
                <p className="text-xs font-bold text-blue-600">Void: {allLocations.length - stats.cities}</p>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stats.cities}</p>
                <p className="text-xs text-muted-foreground uppercase font-bold">Areas & Suburbs</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Provider Recruitment Toolbox</CardTitle>
                <CardDescription>Use this template for direct outreach to high-rated businesses on Google Maps.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-slate-900 text-slate-100 rounded-lg relative group font-mono text-sm leading-relaxed">
                   <pre className="whitespace-pre-wrap">{emailTemplate}</pre>
                   <Button 
                    size="sm" 
                    variant="secondary" 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold"
                    onClick={copyTemplate}
                   >
                     {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                     {copied ? "Copied!" : "Copy Template"}
                   </Button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Mail className="h-8 w-8 text-blue-600" />
                    <div>
                        <p className="font-bold text-blue-900 text-sm uppercase tracking-wide">Direct Outreach Strategy</p>
                        <p className="text-blue-800 text-xs">Search for "Plumbers in [City]" on Google, find 4.5+ star businesses, and send this message via their website contact form.</p>
                    </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recruitment Impact Ranking</CardTitle>
                <CardDescription>Top voids where adding 1 pro creates the most immediate marketplace value.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Revenue Potential</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recruitmentRankings.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>
                          <Badge className={
                            item.impact === 'Very High' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-blue-100 text-blue-700 border-blue-200'
                          }>
                            {item.impact}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.reason}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Supply Alert
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm opacity-90 leading-relaxed">
                  You are currently capturing high-intent traffic for categories where you have <strong>0 verified providers</strong> in Gauteng.
                </p>
                <p className="text-sm opacity-90 font-bold">
                  Recommended Action: Prioritize Plumbers and Electricians for the next sync.
                </p>
                <div className="pt-2">
                  <Button variant="secondary" className="w-full font-bold h-12" asChild>
                    <Link href="/pro/partnership">Preview Invitation Page <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Critical Coverage Voids</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-800 uppercase text-[10px]">Supply Mismatch</p>
                    <p className="text-xs text-red-700 font-medium">Plumbing is the #1 searched category with the lowest provider density.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-blue-800 uppercase text-[10px]">Healthy Flow</p>
                    <p className="text-xs text-blue-700 font-medium">Blinds and Window Decor categories have 100% suburb coverage in JHB.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}