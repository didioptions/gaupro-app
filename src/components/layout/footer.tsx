import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold text-foreground">
              <span>GAUPRO</span>
              <span className="text-sm font-normal text-muted-foreground ml-2">© 2025</span>
            </div>
            <nav className="flex gap-4 sm:gap-6 text-sm">
              <Link href="/terms" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Cookie Policy</Link>
              <Link href="#" className="hover:text-primary">Pro Centre</Link>
            </nav>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center sm:text-left text-xs text-muted-foreground/80 space-y-2">
            <p>
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
            </p>
            <p>
                2012-2025 © Gaupro Pty Ltd. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
