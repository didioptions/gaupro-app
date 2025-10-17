'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import {
  Bell,
  ChevronDown,
  User,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

function ProHeader() {
  const auth = useAuth();
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  const handleLogout = () => {
    if (auth) {
      signOut(auth).then(() => {
        router.push('/');
      });
    }
  };

  if (isUserLoading) {
    return (
       <header className="bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
               <Link href="/" className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tighter">
                  GAU<span className="text-primary">PRO</span>
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-32" />
                 <Skeleton className="h-4 w-24" />
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="hidden md:flex items-center gap-2">
                 <Skeleton className="h-8 w-24" />
                 <Skeleton className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
     <header className="bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tighter">
                  GAU<span className="text-primary">PRO</span>
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                <Link href="/pro/dashboard" className="hover:text-primary">
                  Leads
                </Link>
                <Link href="/browse-quotes" className="hover:text-primary">
                  Customer Requests
                </Link>
                <Link href="/pro/buy-credits" className="hover:text-primary">
                  Buy Credits
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <Badge className="absolute top-3 right-10 h-4 w-4 justify-center p-0 text-xs rounded-full bg-red-600 text-white">
                  0
                </Badge>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">{user?.email || "Pro Account"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
  )
}


export default function ProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/pro/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
     return (
      <div className="flex flex-col min-h-screen">
        <ProHeader />
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

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <ProHeader />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
