'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

const PUBLIC_PRO_ROUTES = [
  '/pro/login', 
  '/pro/register', 
  '/pro/signup', 
  '/pro/forgot-password', 
  '/pro/reset-password',
  '/pro/verify-email',
  '/pro/partnership'
];

export default function ProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, profile, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Public routes include specific auth pages, dynamic business profiles, and the business claiming flow.
  const isPublicDynamicProfile = /^\/pro\/(?!dashboard|profile|buy-credits|account-settings|verify|login|register|signup|admin|forgot-password|reset-password|verify-email|partnership|claim)[^/]+$/.test(pathname);
  const isPublicProRoute = PUBLIC_PRO_ROUTES.includes(pathname) || isPublicDynamicProfile || pathname.startsWith('/pro/claim/');

  useEffect(() => {
    if (!isUserLoading) {
      // 1. If no user and trying to access a protected pro route, go to login.
      if (!user && !isPublicProRoute) {
        router.push('/pro/login');
        return;
      }

      const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';
      
      // 2. If logged in as a pro but not verified, force them to the verification page
      // unless they are already on a public route or are an administrator.
      if (user && !user.emailVerified && !isAdmin && !isPublicProRoute) {
        router.push('/pro/verify-email');
        return;
      }
    }
  }, [user, profile, isUserLoading, router, pathname, isPublicProRoute]);

  if (isUserLoading) {
     return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="space-y-4">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-64 w-full" />
             <Skeleton className="h-64 w-full" />
          </div>
        </main>
      </div>
    );
  }

  // Prevent rendering of protected segments for unverified users to avoid unauthorized state
  const isProtected = !isPublicProRoute;
  const isUnverified = user && !user.emailVerified && !(profile?.role === 'admin' || profile?.role === 'super_admin');
  
  if (isProtected && isUnverified) {
    return (
       <main className="flex-grow container mx-auto px-4 py-20 text-center space-y-6">
          <Loader2 className="h-10 w-10 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground font-medium">Redirecting to verification...</p>
       </main>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

import { Loader2 } from 'lucide-react';