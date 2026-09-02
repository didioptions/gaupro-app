
'use client';

import React, { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MapPin, 
  Target,
  Briefcase,
  Loader2,
  ChevronRight,
  CircleAlert,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  TrendingDown
} from 'lucide-react';
import { allServices } from '@/lib/services-list';
import { allLocations } from '@/lib/locations';
import { cityExpansionMap } from '@/lib/location-data';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Priority suburbs for the Command Centre
const STRATEGIC_SUBURBS = [
    'sandton', 'randburg', 'midrand', 'fourways', 'roodepoort', 'soweto', 
    'rosebank', 'bedfordview', 'edenvale', 'germiston', 'alberton', 'benoni', 'johannesburg-south'
];

// Strategic focus categories
const STRATEGIC_SERVICES = [
    'plumber', 'electrician', 'solar-systems', 'cleaning-service', 
    'rubble-removal', 'demolition', 'tlb-hire', 'handyman', 'builders', 'painters'
];

export default function MarketplaceHealthPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();

  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore, isUserLoading]);

  const leadsQuery = useMemoFirebase(() => {
      if (!firestore || isUserLoading) return null;
      return query(collection(firestore, 'leads_public'), orderBy('createdAt', 'desc'), limit(500));
  }, [firestore, isUserLoading]);

  const { data: professionals, loading: loadingPros } = useCollection<DocumentData>(prosQuery);
  const { data: leads, loading: loadingLeads } = useCollection<DocumentData>(leadsQuery);

  const analytics = useMemo(() => {
    if (!professionals) return { total: 0, gauteng: 0, johannesburg: 0 };
    return {
        total: professionals.length,
        gauteng: professionals.filter(p => p.province === 'Gauteng' || p.location === 'johannesburg').length,
        johannesburg: professionals.filter(p => p.location === 'johannesburg').length,
    };
  }, [professionals]);

  const recruitmentIntel = useMemo(() => {
    const opportunities: any[] = [];
    
    STRATEGIC_SERVICES.forEach(serviceSlug => {
        const serviceLabel = allServices.find(s => s.value === serviceSlug)?.label || serviceSlug;
        
        STRATEGIC_SUBURBS.forEach(suburbSlug => {
            const suburbLabel = allLocations.find(l => l.value === suburbSlug)?.label || suburbSlug;
            
            // 1. Calculate Live Demand (Active Leads)
            const localLeads = (leads || []).filter(l => 
                l.category?.toLowerCase() === serviceLabel.toLowerCase() && 
                (l.locationSlug === suburbSlug || l.location?.toLowerCase().includes(suburbSlug))
            ).length;

            // 2. Calculate Live Supply (Matching Pros)
            const localPros = (professionals || []).filter(p => {
                const isCatMatch = (p.serviceCategory === serviceLabel || (p.tags || []).includes(serviceLabel));
                const proCity = p.location?.toLowerCase();
                const isLocMatch = p.suburb?.toLowerCase() === suburbSlug || 
                                 (p.serviceAreas || []).includes(suburbSlug) ||
                                 (proCity === 'johannesburg' && cityExpansionMap['johannesburg']?.includes(suburbSlug));
                return isCatMatch && isLocMatch;
            }).length;

            // 3. Determine Priority & Status
            let status = 'COVERED';
            let priority = 'LOW';
            let action = 'Monitor coverage.';

            if (localLeads > 0 && localPros === 0) {
                status = 'CRITICAL — DEMAND GAP';
                priority = 'CRITICAL';
                action = `Recruit ${serviceLabel.toLowerCase()}s covering ${suburbLabel} immediately.`;
            } else if (localLeads > 0 && localPros === 1) {
                status = 'HIGH — LOW SUPPLY';
                priority = 'HIGH';
                action = `Add secondary ${serviceLabel.toLowerCase()} supply in ${suburbLabel}.`;
            } else if (localPros === 0 && localLeads === 0) {
                status = 'OPPORTUNITY — SUPPLY GAP';
                priority = 'MEDIUM';
                action = `Seed ${serviceLabel.toLowerCase()}s in ${suburbLabel} for future demand.`;
            } else if (localPros >= 2) {
                status = 'COVERED';
                priority = 'LOW';
                action = 'Area healthy.';
            }

            opportunities.push({
                service: serviceLabel,
                suburb: suburbLabel,
                leads: localLeads,
                pros: localPros,
                status,
                priority,
                action
            });
        });
    });

    // Sort by Priority: Critical > High > Medium > Low
    return opportunities.sort((a, b) => {
        const score = (p: string) => ({ 'CRITICAL': 3, 'HIGH': 2, 'MEDIUM': 1, 'LOW': 0 }[p] || 0);
        if (score(b.priority) !== score(a.priority)) return score(b.priority) - score(a.priority);
        return b.leads - a.leads;
    });
  }, [professionals, leads]);

  if (loadingPros || loadingLeads) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground font-medium italic">Scanning Marketplace Command Centre...</p>
          </div>
      );
  }

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-1">
                <Target className="h-4 w-4" />
                Recruitment Command Centre
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Marketplace Intelligence</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">Identifying critical demand-supply gaps in Johannesburg and Gauteng based on live data.</p>
          </div>
          <div className="flex gap-3">
              <Button variant="outline" className="bg-white font-bold" asChild>
                  <Link href="/pro/admin/pros">Pro Directory</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 font-bold" asChild>
                  <Link href="/pro/admin/leads">Approval Queue</Link>
              </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-red-500 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <CircleAlert className="h-5 w-5 text-red-600" />
                <Badge variant="destructive">Demand Gaps</Badge>
              </div>
              <p className="text-4xl font-black">{recruitmentIntel.filter(o => o.priority === 'CRITICAL').length}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-wider">Unfulfilled Segments</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">Bottlenecks</Badge>
              </div>
              <p className="text-4xl font-black">{recruitmentIntel.filter(o => o.priority === 'HIGH').length}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-wider">Single Pro Coverage</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="outline">Gauteng Pros</Badge>
              </div>
              <p className="text-4xl font-black">{analytics.gauteng}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-wider">Registered Supply</p>
            </CardContent>
          </Card>
           <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Total Intake</Badge>
              </div>
              <p className="text-4xl font-black">{leads?.length || 0}</p>
              <p className="text-[10px] uppercase font-bold opacity-70 mt-1 tracking-wider">Active JHB Leads</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="border-b bg-white">
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                        Priority Recruitment Opportunities
                    </CardTitle>
                    <CardDescription className="mt-1">Sorted by urgency: Critical Demand Gaps followed by supply bottlenecks.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
                <Table>
                <TableHeader className="bg-secondary/20">
                    <TableRow>
                    <TableHead className="font-bold">Service Category</TableHead>
                    <TableHead className="font-bold">City / Suburb</TableHead>
                    <TableHead className="font-bold text-center">Active Leads</TableHead>
                    <TableHead className="font-bold text-center">Matching Pros</TableHead>
                    <TableHead className="font-bold">Marketplace Priority</TableHead>
                    <TableHead className="font-bold">Recommended Action</TableHead>
                    <TableHead className="text-right font-bold">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recruitmentIntel.slice(0, 50).map((opp, i) => (
                        <TableRow key={i} className={cn(
                            "hover:bg-secondary/10 transition-colors",
                            opp.priority === 'CRITICAL' && "bg-red-50/40",
                            opp.priority === 'HIGH' && "bg-orange-50/30"
                        )}>
                        <TableCell className="font-bold text-sm">{opp.service}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-1.5 text-xs">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <span className="capitalize">{opp.suburb}</span>
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <span className={cn(
                                "font-mono font-bold",
                                opp.leads > 0 ? "text-blue-600" : "text-muted-foreground opacity-30"
                            )}>
                                {opp.leads}
                            </span>
                        </TableCell>
                        <TableCell className="text-center">
                            <Badge variant="outline" className={cn(
                                "font-mono",
                                opp.pros === 0 ? "text-red-600 border-red-200 bg-red-50" : "text-green-700 bg-green-50 border-green-200"
                            )}>
                                {opp.pros}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            {opp.priority === 'CRITICAL' ? (
                                <Badge className="bg-red-600 text-white border-0 shadow-sm animate-pulse whitespace-nowrap">
                                    🔴 CRITICAL — DEMAND GAP
                                </Badge>
                            ) : opp.priority === 'HIGH' ? (
                                <Badge className="bg-orange-500 text-white border-0 shadow-sm whitespace-nowrap">
                                    🟠 HIGH — LOW SUPPLY
                                </Badge>
                            ) : opp.priority === 'MEDIUM' ? (
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200 whitespace-nowrap">
                                    🟡 OPPORTUNITY — SUPPLY GAP
                                </Badge>
                            ) : (
                                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 whitespace-nowrap">
                                    🟢 COVERED
                                </Badge>
                            )}
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                            <p className="text-[10px] leading-relaxed italic text-muted-foreground">
                                {opp.action}
                            </p>
                        </TableCell>
                        <TableCell className="text-right">
                            {opp.priority !== 'LOW' ? (
                                <Button size="sm" variant={opp.priority === 'CRITICAL' ? "default" : "outline"} className="gap-2 font-bold text-[10px] h-8" asChild>
                                    <Link href="/pro/partnership">
                                        RECRUIT <ChevronRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                            ) : (
                                <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto opacity-50" />
                            )}
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
