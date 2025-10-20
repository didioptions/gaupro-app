
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Doing Business',
    links: [
      { text: 'Browse Quotes', href: '/browse-quotes' },
      { text: 'Join as a Pro', href: '/pro/signup' },
      { text: 'Pro Success Stories', href: '#' },
      { text: 'Pro Centre', href: '#' },
    ],
  },
  {
    title: '🏆 About Gaupro',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Join Our Team', href: '#' },
      { text: 'Blog', href: '/blog' },
      { text: "Careers (We're Hiring!)", href: '#' },
    ],
  },
  {
    title: 'Let us Help You',
    links: [
      { text: 'How It Works', href: '/how-it-works' },
      { text: 'Trust & Safety', href: '#' },
      { text: 'Request Quote', href: '/post-request' },
      { text: 'Contact Us', href: '#' },
    ],
  },
];

const AppButton = ({ platform, icon }: { platform: string, icon: React.ReactNode }) => (
    <button className="flex items-center justify-center w-36 h-12 bg-background border border-gray-300 rounded-md text-foreground hover:bg-gray-100 transition-colors">
        {icon}
        <div className="text-left ml-2">
            <p className="text-xs leading-none">GET IT ON</p>
            <p className="text-sm font-semibold leading-tight">{platform}</p>
        </div>
    </button>
);


export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4">Download Apps</h3>
            <div className="space-y-4">
                 <button className="flex items-center justify-center w-36 h-12 bg-transparent border border-gray-700 rounded-md text-foreground hover:bg-gray-100 transition-colors group">
                    <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24"><path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H10.5C10.7761 3 11 3.22386 11 3.5V20.5C11 20.7761 10.7761 21 10.5 21H3.6C3.26863 21 3 20.7314 3 20.4Z" fill="currentColor"></path><path d="M12.4286 19.34L21 12L12.4286 4.66V19.34Z" fill="currentColor"></path></svg>
                    <div className="text-left">
                        <p className="text-xs leading-none uppercase">Get it on</p>
                        <p className="text-sm font-semibold leading-tight">Google Play</p>
                    </div>
                </button>
                 <button className="flex items-center justify-center w-36 h-12 bg-transparent border border-gray-700 rounded-md text-foreground hover:bg-gray-100 transition-colors group">
                    <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24"><path d="M19.1859 13.939C19.2396 13.8643 19.2942 13.7915 19.3496 13.7198C20.3751 12.3852 20.9083 11.2335 20.9702 9.53997C20.9859 9.10515 20.6754 8.70562 20.2319 8.61864C19.7821 8.52851 19.3331 8.7759 19.1235 9.18349C18.0643 11.2592 16.4866 12.0622 15.4211 12.0834C14.3644 12.0666 13.3109 11.272 12.2709 9.20619C11.8385 8.31828 11.0823 7.84883 10.2307 7.84311C9.37911 7.83847 8.53177 8.30792 8.09941 9.19475C6.44234 12.2173 7.42436 15.9323 9.0716 18.0827C10.0537 19.3444 11.0937 20.5904 12.4433 20.5926C13.7388 20.5904 14.2882 19.8302 15.9452 17.585C16.6346 16.6577 17.2699 15.7923 18.0654 15.7722C18.8258 15.7532 19.3286 16.2738 19.3484 16.2962C19.3516 16.3018 17.832 17.2023 17.8051 18.814C17.7854 20.0142 18.7305 20.9169 19.9254 20.8937C20.4357 20.8842 21.4326 20.5904 22.2886 19.4939C22.6872 18.9669 23.4478 18.0816 23.8298 17.0737C20.8433 16.4253 20.3541 14.5126 20.3809 14.4752C20.3475 14.4847 19.1171 14.939 19.1859 13.939ZM13.8169 5.86438C14.6196 4.90481 15.8282 4.3312 16.8981 4.3312C17.006 4.33333 17.1139 4.34604 17.2207 4.3683C17.7126 4.46261 18.0374 4.93419 17.9409 5.43372C17.228 9.02708 14.417 10.7418 12.8718 10.7418C12.7531 10.7418 12.6343 10.725 12.5188 10.6932C12.0464 10.5739 11.7585 10.1002 11.8799 9.61905C12.5152 7.08632 13.1201 6.67139 13.8169 5.86438Z" fill="currentColor"></path></svg>
                    <div className="text-left">
                        <p className="text-xs leading-none uppercase">Download on the</p>
                        <p className="text-sm font-semibold leading-tight">App Store</p>
                    </div>
                </button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold text-foreground">
                <span className="font-extrabold text-2xl tracking-tighter">GAU<span className="text-primary">PRO</span></span>
              <span className="text-sm font-normal text-muted-foreground ml-2">© 2025</span>
            </div>
            <nav className="flex gap-4 sm:gap-6 text-sm">
              <Link href="/terms" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Cookie Policy</Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5"/></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
            </div>
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
