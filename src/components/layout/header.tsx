'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center justify-start">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-extrabold text-2xl tracking-tighter">GAU<span className="text-primary">PRO</span></span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/post-request" className="transition-colors hover:text-primary text-foreground/60 font-medium">
              Post Request
            </Link>
            <Link href="/browse-quotes" className="transition-colors hover:text-primary text-foreground/60 font-medium">
              Browse Quotes
            </Link>
            <Link href="/pro/signup" className="transition-colors hover:text-primary text-foreground/60 font-medium">
              Join as a Pro
            </Link>
            <Link href="/pro/login" className="transition-colors hover:text-primary text-foreground/60 font-medium">
              Login
            </Link>
        </nav>

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
                 <span className="font-extrabold text-2xl tracking-tighter">GAU<span className="text-primary">PRO</span></span>
              </Link>
              <div className="flex flex-col space-y-4 pt-6">
                <Link href="/post-request" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                  Post Request
                </Link>
                <Link href="/browse-quotes" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                  Browse Quotes
                </Link>
                <Link href="/pro/signup" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                  Join as a Pro
                </Link>
                <Link href="/pro/login" className="transition-colors hover:text-primary text-foreground/60" onClick={closeSheet}>
                  Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
