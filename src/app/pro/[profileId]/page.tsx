import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import ProfileDisplay from '@/components/pro/profile-display';
import type { Professional } from '@/components/pro/profile-display';

interface PageProps {
  params: Promise<{ profileId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getProfileData(profileId: string): Promise<Professional | null> {
  // Ensure we use the shared initialization logic
  const { firestore } = initializeFirebase();
  const docRef = doc(firestore, 'professionalProfiles', profileId);
  
  try {
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() } as Professional;
  } catch (error) {
    console.error("Error fetching profile data on server:", error);
    return null;
  }
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { profileId } = await params;
  const sParams = await searchParams;
  const profile = await getProfileData(profileId);
  
  if (!profile) {
    return { title: 'Professional Not Found' };
  }

  const name = profile.name || 'Professional Service';
  const category = profile.serviceCategory || 'Service Provider';
  const location = profile.location || 'South Africa';

  return {
    title: `${name} | ${category} in ${location} | Gaupro`,
    description: `View profile, reviews, and portfolio for ${name}, a verified ${category.toLowerCase()} in ${location} on Gaupro.`,
    alternates: {
      canonical: `https://www.gaupro.co.za/pro/${profileId}`,
    },
  };
}

export default async function ProfessionalProfilePage({ params, searchParams }: PageProps) {
  const { profileId } = await params;
  const sParams = await searchParams;
  const profileData = await getProfileData(profileId);

  if (!profileData) {
    notFound();
  }

  // Handle dynamic service context for personalization
  const serviceQuery = (sParams.service as string) || 'general services';
  const singularOrPluralLowercase = serviceQuery.endsWith('s') ? serviceQuery.toLowerCase() : `${serviceQuery.toLowerCase()}s`;
  
  let description = profileData.description || '';
  description = description.replace('{service}', singularOrPluralLowercase);

  const processedProfessional: Professional = {
    ...profileData,
    id: profileId,
    description: description,
    tags: profileData.tags || [singularOrPluralLowercase],
    reviewData: profileData.reviewData || [],
    serviceCategory: profileData.serviceCategory || 'Professional Service',
  };

  return (
    <main className="bg-secondary/50 py-12 min-h-screen">
      <ProfileDisplay professional={processedProfessional} />
    </main>
  );
}
