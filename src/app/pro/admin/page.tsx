'use client';

import React from 'react';
import { 
  Users, 
  Briefcase, 
  Activity, 
  ShieldAlert, 
  MessageSquare, 
  FileCheck, 
  Wallet, 
  TrendingUp, 
  Image as ImageIcon,
  LayoutDashboard,
  ShieldCheck,
  Search,
  Scale
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const adminTools = [
  {
    title: 'Customer Management',
    desc: 'Manage user accounts, view histories, and handle support.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
    href: '/pro/admin/customers',
    color: 'bg-blue-50'
  },
  {
    title: 'Lead Oversight',
    desc: 'Monitor job requests and automated quality scoring.',
    icon: <Briefcase className="h-6 w-6 text-green-600" />,
    href: '/pro/admin/leads',
    color: 'bg-green-50'
  },
  {
    title: 'Lead Disputes',
    desc: 'Review and resolve professional refund requests.',
    icon: <Scale className="h-6 w-6 text-amber-600" />,
    href: '/pro/admin/disputes',
    color: 'bg-amber-50'
  },
  {
    title: 'Risk & Fraud',
    desc: 'Review identity alerts and behavioral risk flags.',
    icon: <ShieldAlert className="h-6 w-6 text-red-600" />,
    href: '/pro/admin/fraud',
    color: 'bg-red-50'
  },
  {
    title: 'Marketplace Pulse',
    desc: 'Real-time feed of all marketplace activity.',
    icon: <Activity className="h-6 w-6 text-purple-600" />,
    href: '/pro/admin/operations',
    color: 'bg-purple-50'
  },
  {
    title: 'Trust & Moderation',
    desc: 'Manage reviews, fraud scores, and resolutions.',
    icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
    href: '/pro/admin/reviews',
    color: 'bg-orange-50'
  },
  {
    title: 'Verification Queue',
    desc: 'Review ID documents and approve Verified Pros.',
    icon: <FileCheck className="h-6 w-6 text-teal-600" />,
    href: '/pro/admin/verifications',
    color: 'bg-teal-50'
  },
  {
    title: 'Financials & Credits',
    desc: 'Adjust professional balances and view history.',
    icon: <Wallet className="h-6 w-6 text-indigo-600" />,
    href: '/pro/admin/credits',
    color: 'bg-indigo-50'
  },
  {
    title: 'Marketplace Health',
    desc: 'Live provider supply vs. platform search demand.',
    icon: <TrendingUp className="h-6 w-6 text-rose-600" />,
    href: '/pro/admin/marketplace-health',
    color: 'bg-rose-50'
  }
];

export default function AdminHubPage() {
  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-primary mb-2">
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-bold uppercase tracking-wider text-xs">Command Center</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Admin Hub</h1>
          <p className="text-muted-foreground mt-2 text-lg">Central oversight for GauPro South Africa.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group">
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-border/50 overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-1.5 h-full ${tool.color.replace('bg-', 'bg-').replace('-50', '-500')}`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{tool.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <section className="mt-16 pt-12 border-t">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900 text-slate-100 border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-teal-400" />
                  Security Protocol
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400 space-y-4">
                <p>You are accessing the GauPro Administrative network. All actions taken in this hub are logged to the <strong>marketplace_audit_logs</strong> collection with your UID and IP.</p>
                <div className="p-3 bg-white/5 rounded border border-white/10 text-xs font-mono">
                  ROLE: ADMIN_OVERSIGHT<br />
                  AUTH: SECURE_FIREBASE_SESSION<br />
                  LOGS: APPEND_ONLY_IMMUTABLE
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Search</CardTitle>
                <CardDescription>Quick jump to any user or lead by ID.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      placeholder="Enter UID or Request ID..." 
                      className="w-full pl-9 pr-4 py-2 rounded-md border text-sm bg-background"
                    />
                  </div>
                  <Button variant="secondary">Go</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}