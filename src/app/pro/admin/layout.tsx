'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { logAdminAction } from '@/firebase/admin-logs';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { profile, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading) {
      if (!profile || (profile.role !== 'admin' && profile.role !== 'super_admin')) {
        router.push('/access-denied');
      } else {
        // Log successful admin access
        logAdminAction('ACCESS_ADMIN_ROUTE');
      }
    }
  }, [profile, isUserLoading, router]);

  if (isUserLoading) {
    return (
      <div className="container mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-10 w-1/4" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  // Double check role before rendering children
  if (!profile || (profile.role !== 'admin' && profile.role !== 'super_admin')) {
    return null;
  }

  return <>{children}</>;
}