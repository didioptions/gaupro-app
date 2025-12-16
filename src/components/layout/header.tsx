
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
import Image from 'next/image';

const Logo = () => (
  <span className="flex items-center space-x-2">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/studio-5618869838-18486.firebasestorage.app/o/Gaupro-Logo-2.png?alt=media&token=2422a5e5-397a-4528-98e9-f2c00227181f"
      alt="Gaupro Logo"
      width={128}
      height={32}
      className="h-8 w-auto"
    />
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
