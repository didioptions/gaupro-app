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
import { Menu, User, ChevronDown, Bell, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useUser, useAuth, useFirestore } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';
import { Badge } from '../ui/badge';
import { Logo } from '@/components/logo';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

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
  const [unreadCount, setUnreadCount] = useState(0);
  const { user, profile, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();

  const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';

  useEffect(() => {
    if (!user || !firestore) {
      setUnreadCount(0);
      return;
    }

    const unreadQuery = query(
      collection(firestore, 'users', user.uid, 'notifications'),
      where('status', '==', 'unread')
    );

    const unsubscribe = onSnapshot(unreadQuery, (snapshot) => {
      setUnreadCount(snapshot.size);
    }, (error) => {
      console.error("Error listening for unread notifications:", error);
    });

    return () => unsubscribe();
  }, [user, firestore]);

  const closeSheet = () => setIsSheetOpen(false);

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
        window.location.href = '/';
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-32 md:h-40 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-start pl-4 md:pl-16">
          <Logo />
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold pr-8">
          {isUserLoading && (
            <>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-9 w-20" />
            </>
          )}

          {!isUserLoading && user && (
            <>
              {proNavLinks.map(link => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/70">
                    {link.label}
                </Link>
              ))}
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={() => router.push('/pro/dashboard')}>
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-auto min-w-[1rem] justify-center p-1 text-[10px] rounded-full bg-primary text-primary-foreground border-white">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </Badge>
                  )}
                </Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 h-12 px-4">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:inline">{user?.displayName || user?.email || 'Pro Account'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => router.push('/pro/dashboard')}>Dashboard</DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem onClick={() => router.push('/pro/admin')} className="font-bold text-primary flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" /> Admin Hub
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => router.push('/contact')}>Support</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/pro/account-settings')}>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          {!isUserLoading && !user && (
            <>
              {publicNavLinks.map(link => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/70">
                    {link.label}
                </Link>
              ))}
              <Button asChild className="px-8 h-12 font-bold text-base shadow-md bg-primary hover:bg-primary/90">
                  <Link href="/pro/login">Login</Link>
              </Button>
            </>
          )}
        </nav>
        {/* --- END DESKTOP --- */}
        
        {/* --- MOBILE NAVIGATION --- */}
        <div className="md:hidden pr-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div onClick={closeSheet} className="pb-8 border-b mb-6">
                <Logo />
              </div>
              <div className="flex flex-col space-y-6 pt-2 pr-6">
                {!isUserLoading && user && (
                  <>
                    <Link href="/pro/dashboard" className="text-lg font-medium transition-colors hover:text-primary text-foreground" onClick={closeSheet}>
                        Dashboard {unreadCount > 0 && `(${unreadCount})`}
                    </Link>
                    {isAdmin && (
                      <Link href="/pro/admin" className="text-lg transition-colors hover:text-primary font-bold flex items-center gap-2 text-primary" onClick={closeSheet}>
                        <LayoutDashboard className="h-5 w-5" /> Admin Hub
                      </Link>
                    )}
                    {proNavLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary text-foreground/80" onClick={closeSheet}>
                            {link.label}
                        </Link>
                    ))}
                    <button className="text-left text-lg font-medium transition-colors hover:text-primary text-foreground/80" onClick={() => { handleLogout(); closeSheet(); }}>
                        Logout
                    </button>
                  </>
                )}
                {!isUserLoading && !user && (
                  <>
                    {publicNavLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-primary text-foreground" onClick={closeSheet}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/pro/login" className="text-lg font-bold transition-colors hover:text-primary text-primary" onClick={closeSheet}>
                        Login
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* --- END MOBILE --- */}

      </div>
    </header>
  );
}
