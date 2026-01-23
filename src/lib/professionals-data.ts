// This file is deprecated. Data is now fetched from Firestore.
type Professional = {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  reviews: number;
  avatarSeed: string;
  serviceCategory: string;
  isProVerified?: boolean;
  isDemo: boolean;
  priorityRank: number;
  yearsInBusiness?: number;
  employees?: number;
  services?: string[];
  reviewData?: { author: string; phone?: string; rating: number; comment: string }[];
};

type ProfessionalsByCategory = { [key: string]: Professional[] };

export const allProfessionals: ProfessionalsByCategory = {};

export const getProfessionalById = (id: string): Professional | null => {
    // This function will no longer work as data is in Firestore.
    // Components should fetch data directly from Firestore.
    console.warn("getProfessionalById is deprecated. Fetch data from Firestore instead.");
    return null;
};
