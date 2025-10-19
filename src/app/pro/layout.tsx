'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const PUBLIC_PRO_ROUTES = ['/pro/login', '/pro/register', '/pro/signup'];

export default function ProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const isPublicProRoute = PUBLIC_PRO_ROUTES.includes(pathname);

  useEffect(() => {
    // If it's not a public route and the user is not logged in after checking, redirect to login.
    if (!isPublicProRoute && !isUserLoading && !user) {
      router.push('/pro/login');
    }
  }, [user, isUserLoading, router, isPublicProRoute]);

  // If the route is public, just render the children (e.g., login or register page)
  if (isPublicProRoute) {
    return <>{children}</>;
  }
  
  // If we are on a protected route and still loading or no user, show a skeleton loader.
  if (isUserLoading || !user) {
     return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="space-y-4">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-64 w-full" />
             <Skeleton className="h-64 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // If the user is authenticated and on a protected route, show the pro layout.
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
