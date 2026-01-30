
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
import { useState, useMemo } from 'react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';
import { Logo } from '@/components/logo';

const publicNavLinks = [
  { href: '/post-request', label: 'Post Request' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/browse-leads', label: 'Browse Leads' },
  { href: '/pro/signup', label: 'Join as a Pro' },
];

const proNavLinks = [
    { href: '/pro/profile', label: 'Business Profiles' },
    { href: '/browse-quotes', label: 'Customer Requests' },
    { href: '/pro/buy-credits', label: 'Buy Credits' },
];

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

  const navContent = useMemo(() => {
    if (isUserLoading) {
      return {
        desktop: (
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-20" />
          </div>
        ),
        mobile: null, // Don't show anything in mobile sheet while loading
      };
    }

    if (user) {
      return {
        desktop: (
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            {proNavLinks.map(link => (
                 <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60">
                    {link.label}
                 </Link>
            ))}
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
        ),
        mobile: (
            <>
                <Link href="/pro/dashboard" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                    Dashboard
                </Link>
                {proNavLinks.map(link => (
                    <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                        {link.label}
                    </Link>
                ))}
                <Link href="#" className="transition-colors hover:text-primary text-foreground/60" onClick={() => { handleLogout(); closeSheet(); }}>
                    Logout
                </Link>
            </>
        ),
      };
    }

    return {
      desktop: (
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {publicNavLinks.map(link => (
                 <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60">
                    {link.label}
                 </Link>
            ))}
            <Button asChild>
                <Link href="/pro/login">Login</Link>
            </Button>
        </nav>
      ),
      mobile: (
        <>
            {publicNavLinks.map(link => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                    {link.label}
                </Link>
            ))}
            <Link href="/pro/login" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                Login
            </Link>
        </>
      ),
    };
  }, [user, isUserLoading, auth, router]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center justify-start">
          <Logo />
        </div>
        
        {navContent.desktop}

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
              <div onClick={closeSheet}><Logo /></div>
              <div className="flex flex-col space-y-4 pt-6">
                {navContent.mobile}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
