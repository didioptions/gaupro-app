import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Gaupro Support',
  description: 'Get in touch with the Gaupro team for support, business inquiries, or technical assistance.',
  alternates: {
    canonical: 'https://www.gaupro.co.za/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
