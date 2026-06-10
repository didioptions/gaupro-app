'use client';

import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function AccessDeniedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-xl shadow-lg border border-red-100">
        <div className="flex justify-center">
            <div className="p-4 bg-red-50 rounded-full">
                <ShieldAlert className="h-12 w-12 text-red-600" />
            </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-muted-foreground">
          Sorry, you do not have the required administrative permissions to access this page. 
          If you believe this is an error, please contact the system administrator.
        </p>
        <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
                <Link href="/pro/dashboard">Return to Dashboard</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
                <Link href="/">Back to Homepage</Link>
            </Button>
        </div>
        <p className="text-xs text-muted-foreground pt-4 border-t">
            Your attempt has been logged for security purposes.
        </p>
      </div>
    </main>
  );
}