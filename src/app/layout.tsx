import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/client-layout';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gaupro.co.za'),
  title: {
    default: 'Gaupro | Find Trusted Pros for Any Project in South Africa',
    template: '%s | Gaupro'
  },
  description:
    'Gaupro connects you with verified local service professionals across South Africa. Get free quotes for plumbing, electrical, building, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.gaupro.co.za/',
    siteName: 'Gaupro',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GauproSA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-body bg-background text-foreground antialiased flex flex-col min-h-screen">
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
