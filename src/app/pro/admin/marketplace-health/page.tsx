'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData } from 'firebase/firestore';
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
  Target,
  Briefcase,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { allServices } from '@/lib/services-list';
import { allLocations } from '@/lib/locations';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PRIORITY_JHB_SUBURBS = [
    'sandton', 'randburg', 'midrand', 'fourways', 'roodepoort', 'soweto', 
    'rosebank', 'bedfordview', 'edenvale', 'germiston', 'alberton', 'benoni'
];

const PRIORITY_SERVICES = [
    'plumber', 'electrician', 'solar-systems', 'cleaning-service', 
    'rubble-removal', 'demolition', 'tlb-hire', 'handyman'
];

export default function MarketplaceHealthPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const { isUserLoading } = useUser();

  // 1. Fetch Real Live Professionals
  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore, isUserLoading]);

  // 2. Fetch Real Leads for Demand Analysis
  const leadsQuery = useMemoFirebase(() => {
      if (!firestore || isUserLoading) return null;
      return query(collection(firestore, 'leads_public'), orderBy('createdAt', 'desc'), limit(200));
  }, [firestore, isUserLoading]);

  const { data: professionals, loading: loadingPros } = useCollection<DocumentData>(prosQuery);
  const { data: leads, loading: loadingLeads } = useCollection<DocumentData>(leadsQuery);

  const analytics = useMemo(() => {
    if (!professionals) return { 
        total: 0, 
        gauteng: 0,
        johannesburg: 0,
        suburbCoverage: {} as Record<string, number>,
        categoryStats: {} as Record<string, { pros: number, leads: number }>,
        gaps: [] as any[]
    };
    
    const stats = {
        total: professionals.length,
        gauteng: professionals.filter(p => p.province === 'Gauteng' || p.location === 'johannesburg').length,
        johannesburg: professionals.filter(p => p.location === 'johannesburg').length,
        suburbCoverage: {} as Record<string, number>,
        categoryStats: {} as Record<string, { pros: number, leads: number }>,
    };

    // Calculate Suburb Coverage
    PRIORITY_JHB_SUBURBS.forEach(sub => {
        stats.suburbCoverage[sub] = professionals.filter(p => 
            p.suburb?.toLowerCase() === sub || 
            (p.serviceAreas || []).includes(sub)
        ).length;
    });

    // Calculate Category Coverage vs Demand
    PRIORITY_SERVICES.forEach(serviceSlug => {
        const serviceLabel = allServices.find(s => s.value === serviceSlug)?.label || serviceSlug;
        const proCount = professionals.filter(p => p.serviceCategory === serviceLabel || (p.tags || []).includes(serviceLabel)).length;
        const leadCount = (leads || []).filter(l => l.category?.toLowerCase() === serviceLabel.toLowerCase()).length;
        
        stats.categoryStats[serviceSlug] = { pros: proCount, leads: leadCount };
    });

    return stats;
  }, [professionals, leads]);

  const recruitmentOpportunities = useMemo(() => {
    const opps: any[] = [];
    
    PRIORITY_SERVICES.forEach(serviceSlug => {
        const serviceLabel = allServices.find(s => s.value === serviceSlug)?.label || serviceSlug;
        
        PRIORITY_JHB_SUBURBS.forEach(suburbSlug => {
            const suburbLabel = allLocations.find(l => l.value === suburbSlug)?.label || suburbSlug;
            
            // Demand in this specific suburb/category
            const localLeads = (leads || []).filter(l => 
                l.category?.toLowerCase() === serviceLabel.toLowerCase() && 
                (l.locationSlug === suburbSlug || l.location?.toLowerCase().includes(suburbSlug))
            ).length;

            // Supply in this specific suburb/category
            const localPros = (professionals || []).filter(p => 
                (p.serviceCategory === serviceLabel || (p.tags || []).includes(serviceLabel)) &&
                (p.suburb?.toLowerCase() === suburbSlug || (p.serviceAreas || []).includes(suburbSlug))
            ).length;

            if (localPros === 0) {
                opps.push({
                    service: serviceLabel,
                    suburb: suburbLabel,
                    leads: localLeads,
                    pros: localPros,
                    priority: localLeads > 0 ? 'CRITICAL' : 'OPPORTUNITY'
                });
            }
        });
    });

    return opps.sort((a, b) => b.leads - a.leads).slice(0, 10);
  }, [professionals, leads]);

  if (loadingPros || loadingLeads) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground font-medium">Analyzing Marketplace Data...</p>
          </div>
      );
  }

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-1">
                <Target className="h-4 w-4" />
                Launch Strategy: Johannesburg
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Marketplace Health</h1>
            <p className="text-muted-foreground mt-2">Live provider supply vs. customer demand in your primary markets.</p>
          </div>
          <Button variant="outline" className="bg-white" asChild>
              <Link href="/pro/admin/pros">Manage All Pros</Link>
          </Button>
        </header>

        {/* 1. Global Gauteng/JHB Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Total Pros</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.total}</p>
              <p className="text-xs text-muted-foreground uppercase font-bold mt-1">National Network</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Gauteng</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.gauteng}</p>
              <p className="text-xs uppercase font-bold opacity-70 mt-1">Province Supply</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-teal-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-5 w-5 text-teal-600" />
                <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">Priority City</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.johannesburg}</p>
              <p className="text-xs text-muted-foreground uppercase font-bold mt-1">Johannesburg Active</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 2. Suburb Supply Grid */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Johannesburg Suburb Density</CardTitle>
                    <CardDescription>Number of Pros covering major target areas.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    {Object.entries(analytics.suburbCoverage).map(([slug, count]) => (
                        <div key={slug} className="flex justify-between items-center p-2 rounded-lg bg-secondary/40 border">
                            <span className="text-xs font-bold capitalize">{slug.replace('-', ' ')}</span>
                            <Badge variant={count > 0 ? "default" : "outline"} className={cn(count === 0 && "text-muted-foreground opacity-50")}>
                                {count} {count === 1 ? 'Pro' : 'Pros'}
                            </Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* 3. Category Supply vs Demand */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Priority Service Coverage</CardTitle>
                    <CardDescription>Supply (Pros) vs Demand (Live Leads)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {Object.entries(analytics.categoryStats).map(([slug, data]) => (
                        <div key={slug} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-wider">{slug.replace('-', ' ')}</span>
                                <div className="flex gap-4 text-[10px] font-bold uppercase">
                                    <span className="text-primary">Supply: {data.pros}</span>
                                    <span className="text-blue-600">Demand: {data.leads}</span>
                                </div>
                            </div>
                            <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div 
                                    className="absolute left-0 top-0 h-full bg-primary transition-all" 
                                    style={{ width: `${Math.min(100, (data.pros / (data.leads || 1)) * 100)}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        {/* 4. Top Recruitment Opportunities */}
        <Card className="border-t-4 border-t-orange-500 shadow-xl">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                Marketplace Gap Analysis & Recruitment Voids
            </CardTitle>
            <CardDescription>Combinations of services and areas where we have leads but 0 providers.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-secondary/20">
                <TableRow>
                  <TableHead>Category / Suburb</TableHead>
                  <TableHead>Live Demand</TableHead>
                  <TableHead>Current Pros</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recruitmentOpportunities.length > 0 ? (
                  recruitmentOpportunities.map((opp, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <p className="font-bold text-sm">{opp.service}</p>
                        <p className="text-xs text-muted-foreground">{opp.suburb}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-blue-600 font-bold">
                            <Briefcase className="h-3 w-3" />
                            {opp.leads} Leads
                        </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className="opacity-50">0 Pros</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={cn(
                            opp.priority === 'CRITICAL' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-orange-100 text-orange-700 border-orange-200'
                        )}>
                            {opp.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" className="gap-2" asChild>
                            <Link href="/pro/partnership">
                                Recruit Pro <ChevronRight className="h-3 w-3" />
                            </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-muted-foreground italic">
                      No critical voids identified. Suburb/Category coverage is healthy.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
