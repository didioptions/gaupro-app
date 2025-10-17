import Link from "next/link";
import { Wrench, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wrench className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl">Gaupro</span>
            </Link>
            <p className="text-muted-foreground text-sm">Find trusted pros for any project.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse" className="text-muted-foreground hover:text-foreground">Browse Pros</Link></li>
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-foreground">Log In</Link></li>
              <li><Link href="/signup" className="text-muted-foreground hover:text-foreground">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pro/signup" className="text-muted-foreground hover:text-foreground">Sign Up as a Pro</Link></li>
              <li><Link href="/pro/login" className="text-muted-foreground hover:text-foreground">Pro Log In</Link></li>
              <li><Link href="/pro/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gaupro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
