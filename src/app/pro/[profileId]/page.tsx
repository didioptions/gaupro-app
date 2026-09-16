import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFirestore, doc, getDoc, collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import ProfileDisplay from '@/components/pro/profile-display';
import type { Professional } from '@/components/pro/profile-display';

interface PageProps {
  params: { profileId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function getProfileData(profileId: string): Promise<Professional | null> {
  const { firestore } = initializeFirebase();
  const docRef = doc(firestore, 'professionalProfiles', profileId);
  const snap = await getDoc(docRef);
  
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Professional;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const profile = await getProfileData(params.profileId);
  
  if (!profile) {
    return { title: 'Professional Not Found' };
  }

  const name = profile.name || 'Professional Service';
  const category = profile.serviceCategory || 'Service Provider';
  const location = profile.location || 'South Africa';

  return {
    title: `${name} | ${category} in ${location} | GauPro`,
    description: `View profile, reviews, and portfolio for ${name}, a verified ${category.toLowerCase()} in ${location} on GauPro.`,
    alternates: {
      canonical: `https://www.gaupro.co.za/pro/${params.profileId}`,
    },
  };
}

export default async function ProfessionalProfilePage({ params, searchParams }: PageProps) {
  const profileData = await getProfileData(params.profileId);

  if (!profileData) {
    notFound();
  }

  const serviceQuery = (searchParams.service as string) || 'general services';
  const singularOrPluralLowercase = serviceQuery.endsWith('s') ? serviceQuery.toLowerCase() : `${serviceQuery.toLowerCase()}s`;
  
  let description = profileData.description || '';
  description = description.replace('{service}', singularOrPluralLowercase);

  // Note: Reviews are fetched client-side in the display component for real-time interaction
  const processedProfessional: Professional = {
    ...profileData,
    id: params.profileId,
    description: description,
    tags: profileData.tags || [singularOrPluralLowercase],
    reviewData: [], // Initial empty, client component fetches full data
    serviceCategory: profileData.serviceCategory || 'Professional Service',
  };

  return (
    <main className="bg-secondary/50 py-12 min-h-screen">
      <ProfileDisplay professional={processedProfessional} />
    </main>
  );
}
