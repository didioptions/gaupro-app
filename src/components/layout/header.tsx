
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, User, ChevronDown, Bell } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';

const Logo = () => (
  <span className="flex items-center space-x-2">
    <svg
      width="32"
      height="32"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path d="M15 0H80V80H15L0 60V20L15 0Z" fill="hsl(var(--destructive))" />
      <path
        d="M45.72 56.88V48.16C45.72 44.4 44.48 41.52 41.84 39.52C39.24 37.52 35.84 36.52 31.64 36.52C27.8 36.52 24.68 37.32 22.28 38.92V27.4H53.4V20.2H14.84V60H30.8C31.76 60 32.5333 59.8533 33.12 59.56C33.7067 59.2667 34.12 58.8 34.36 58.16L35.8 54.4C36.92 56.4 38.4667 57.8933 40.44 58.88C42.4133 59.8667 44.44 60.36 46.52 60.36C49.96 60.36 52.6667 59.32 54.64 57.24C56.6133 55.16 57.6 52.2667 57.6 48.56C57.6 44.44 56.4667 41.1333 54.2 38.64C51.9333 36.1467 48.88 34.9 45.04 34.9H41.64V43.72H45.04C46.8533 43.72 48.12 44.2933 48.84 45.44C49.56 46.5867 49.92 47.92 49.92 49.44C49.92 51.16 49.3867 52.5467 48.32 53.6C47.2533 54.6533 45.8 55.28 43.96 55.48L45.72 56.88Z"
        fill="white"
      />
    </svg>
    <span className="font-semibold text-2xl tracking-tighter text-primary">
      aupro
    </span>
  </span>
);

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const closeSheet = () => setIsSheetOpen(false);

  const handleLogout = () => {
    if (auth) {
      signOut(auth).then(() => {
        router.push('/');
      });
    }
  };

  const renderDesktopNav = () => {
    if (isUserLoading) {
      return (
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-20" />
        </div>
      );
    }

    if (user) {
      return (
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/pro/profile" className="transition-colors hover:text-primary text-foreground/60">
            Business Profiles
          </Link>
          <Link href="/browse-quotes" className="transition-colors hover:text-primary text-foreground/60">
            Customer Requests
          </Link>
          <Link href="/pro/buy-credits" className="transition-colors hover:text-primary text-foreground/60">
            Buy Credits
          </Link>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <Badge className="absolute top-1 right-1 h-4 w-4 justify-center p-0 text-xs rounded-full bg-red-600 text-white">
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
                <span className="hidden md:inline">{user?.displayName || user?.email || 'Pro Account'}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push('/pro/dashboard')}>Dashboard</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/contact')}>Support</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/pro/account-settings')}>Settings</DropdownMenuItem>
              <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      );
    }

    return (
      <nav className="hidden md:flex items-center gap-2 text-sm">
        <Button asChild variant="ghost" className="transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80 font-medium">
            <Link href="/post-request">Post Request</Link>
        </Button>
        <Button asChild variant="ghost" className="transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80 font-medium">
          <Link href="/how-it-works">
            How It Works
          </Link>
        </Button>
        <Button asChild variant="ghost" className="transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80 font-medium">
          <Link href="/browse-leads">
            Browse Leads
          </Link>
        </Button>
        <Button asChild variant="ghost" className="transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80 font-medium">
          <Link href="/pro/signup">
            Join as a Pro
          </Link>
        </Button>
        <Button asChild>
           <Link href="/pro/login">Login</Link>
        </Button>
      </nav>
    );
  };

  const renderMobileNav = () => {
     if (isUserLoading) {
      return null;
    }

    if (user) {
       return (
        <>
          <Link href="/pro/dashboard" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
            Dashboard
          </Link>
           <Link href="/pro/profile" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
            Business Profiles
          </Link>
          <Link href="/browse-quotes" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
            Customer Requests
          </Link>
          <Link href="/pro/buy-credits" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
            Buy Credits
          </Link>
           <Link href="#" className="transition-colors hover:text-primary text-foreground/60" onClick={() => { handleLogout(); closeSheet(); }}>
            Logout
          </Link>
        </>
      )
    }

    return (
      <>
        <Link href="/post-request" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
            Post Request
        </Link>
        <Link href="/how-it-works" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
          How It Works
        </Link>
        <Link href="/browse-leads" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
          Browse Leads
        </Link>
        <Link href="/pro/signup" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
          Join as a Pro
        </Link>
        <Link href="/pro/login" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
          Login
        </Link>
      </>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center justify-start">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        {renderDesktopNav()}

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2" onClick={closeSheet}>
                 <Logo />
              </Link>
              <div className="flex flex-col space-y-4 pt-6">
                {renderMobileNav()}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
