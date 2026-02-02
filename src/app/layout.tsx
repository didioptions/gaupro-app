import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/layout/client-layout';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Gaupro | Find Trusted Pros for Any Project',
  description:
    'Gaupro helps you find trusted local professionals for any service you need. Get quotes, compare, and hire with confidence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
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
