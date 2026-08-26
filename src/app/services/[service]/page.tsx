import { allServices } from '@/lib/service-questions';
import ServicePageClient from '@/components/services/service-page-client';
import { getServiceLabel, getLocationLabel, generateFAQs } from '@/lib/seo-utils';
import { Metadata } from 'next';

interface PageProps {
  params: { service: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    service: service.value,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const s = getServiceLabel(params.service);
  const l = getLocationLabel(searchParams?.location as string);
  const title = `${s} ${l} | Compare Trusted Pros | GauPro`;
  const description = `Compare top-rated ${s.toLowerCase()} companies in ${l}. Get free quotes from verified local professionals, read reviews, and hire with confidence on GauPro.`;

  // CRITICAL: Ensure the canonical URL includes the location query parameter if it exists
  const canonicalUrl = `https://gaupro.co.za/services/${params.service}${searchParams?.location ? `?location=${searchParams.location}` : ''}`;

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

export default function ServicePage({ params, searchParams }: PageProps) {
  const s = getServiceLabel(params.service);
  const l = getLocationLabel(searchParams?.location as string);
  const faqs = generateFAQs(params.service, searchParams?.location as string);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${s} in ${l}`,
    "description": `Professional ${s.toLowerCase()} services for home and business in ${l}.`,
    "provider": {
      "@type": "Organization",
      "name": "GauPro",
      "url": "https://gaupro.co.za"
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
        "item": "https://gaupro.co.za"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": s,
        "item": `https://gaupro.co.za/services/${params.service}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": l,
        "item": `https://gaupro.co.za/services/${params.service}?location=${searchParams?.location}`
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
      <ServicePageClient params={params} searchParams={searchParams} />
    </>
  );
}
