import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join as a Service Professional | Grow Your Business',
  description: 'Connect with more clients and grow your business in South Africa. Create your free Gaupro profile today.',
  alternates: {
    canonical: 'https://www.gaupro.co.za/pro/signup',
  },
};

export default function ProSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
