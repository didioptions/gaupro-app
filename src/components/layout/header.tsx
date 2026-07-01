
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center justify-start">
          <Logo />
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60">
                    {link.label}
                </Link>
              ))}
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={() => router.push('/pro/dashboard')}>
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-auto min-w-[1rem] justify-center p-1 text-[10px] rounded-full bg-red-600 text-white border-white">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </Badge>
                  )}
                </Button>
              </div>
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
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60">
                    {link.label}
                </Link>
              ))}
              <Button asChild>
                  <Link href="/pro/login">Login</Link>
              </Button>
            </>
          )}
        </nav>
        {/* --- END DESKTOP --- */}
        
        {/* --- MOBILE NAVIGATION --- */}
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
                {!isUserLoading && user && (
                  <>
                    <Link href="/pro/dashboard" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                        Dashboard {unreadCount > 0 && `(${unreadCount})`}
                    </Link>
                    {isAdmin && (
                      <Link href="/pro/admin" className="transition-colors hover:text-primary font-bold flex items-center gap-2" onClick={closeSheet}>
                        <LayoutDashboard className="h-4 w-4" /> Admin Hub
                      </Link>
                    )}
                    {proNavLinks.map(link => (
                        <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                            {link.label}
                        </Link>
                    ))}
                    <button className="text-left transition-colors hover:text-primary text-foreground/60" onClick={() => { handleLogout(); closeSheet(); }}>
                        Logout
                    </button>
                  </>
                )}
                {!isUserLoading && !user && (
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
