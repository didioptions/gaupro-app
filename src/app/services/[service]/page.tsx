import { allServices } from '@/lib/service-questions';
import ServicePageClient from '@/components/services/service-page-client';
import { getServiceLabel, getLocationLabel, generateFAQs } from '@/lib/seo-utils';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    service: service.value,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const sParams = await searchParams;
  const s = getServiceLabel(service);
  const l = getLocationLabel(sParams?.location as string);
  const title = `${s} ${l} | Compare Trusted Pros | GauPro`;
  const description = `Compare top-rated ${s.toLowerCase()} companies in ${l}. Get free quotes from verified local professionals, read reviews, and hire with confidence on GauPro.`;

  const location = sParams?.location as string;
  const canonicalUrl = `https://www.gaupro.co.za/services/${service}${location ? `?location=${location}` : ''}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'GauPro',
      locale: 'en_ZA',
      type: 'website',
    },
  };
}

export default async function ServicePage({ params, searchParams }: PageProps) {
  const { service } = await params;
  const sParams = await searchParams;
  const s = getServiceLabel(service);
  const l = getLocationLabel(sParams?.location as string);
  const faqs = generateFAQs(service, sParams?.location as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${s} in ${l}`,
    "description": `Professional ${s.toLowerCase()} services for home and business in ${l}.`,
    "provider": {
      "@type": "Organization",
      "name": "GauPro",
      "url": "https://www.gaupro.co.za"
    },
    "areaServed": {
      "@type": "City",
      "name": l
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.gaupro.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": s,
        "item": `https://www.gaupro.co.za/services/${service}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": l,
        "item": `https://www.gaupro.co.za/services/${service}?location=${sParams?.location}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ServicePageClient params={{ service }} searchParams={sParams} />
    </>
  );
}
