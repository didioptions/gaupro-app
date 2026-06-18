
export interface SeedProfile {
  id: string; // The SEO-friendly slug
  name: string;
  category: string;
  serviceCategory: string;
  description: string;
  locations: string[];
  location: string;
  phone: string;
  email: string;
  website: string;
  avatarSeed: string;
  photos: string[];
  isUnclaimed: boolean;
  claimable: boolean;
  featured: boolean;
  rating: number | null;
  reviews: number;
  priorityRank: number;
}

const generateDescription = (name: string, category: string, location: string) => {
  return `${name} is a premier ${category} specialist serving the greater ${location} region and surrounding Gauteng suburbs. With a reputation built on reliability and efficiency, this ${category} firm provides comprehensive solutions for residential, commercial, and industrial projects. 

Our team understands the unique challenges of ${location}'s landscape, offering tailored services that prioritize safety and precision. Whether you are managing a large-scale construction site or a smaller home renovation, we bring professional-grade equipment and years of local expertise to every task. 

As a leading ${category} provider in ${location}, we are committed to maintaining high standards of workmanship. Our service range includes specialized ${category} tasks, site management, and expert consultations. We pride ourselves on transparent communication and timely delivery, ensuring that your project stays on track and within budget. 

By choosing a local ${location} expert, you benefit from rapid response times and a deep understanding of municipal regulations and site requirements. Contact us today to discuss your ${category} needs and experience why we are a preferred choice for professionals across the East Rand and Johannesburg.`;
};

const categories = [
  { label: 'Demolition Contractors', value: 'demolition' },
  { label: 'Rubble Removal', value: 'rubble-removal' },
  { label: 'Plant Hire', value: 'plant-hire' },
  { label: 'TLB Hire', value: 'tlb-hire' },
  { label: 'Excavator Hire', value: 'excavator-hire' }
];

const cities = ['Johannesburg', 'Benoni', 'Boksburg', 'Germiston', 'Kempton Park', 'Alberton', 'Springs'];

export const seedPros: SeedProfile[] = [];

// Generate 10 profiles per category for the first 5 categories
categories.forEach((cat) => {
  for (let i = 1; i <= 10; i++) {
    const city = cities[i % cities.length];
    const name = `${city} ${cat.label} ${i > 7 ? 'Group' : 'Services'}`;
    const slug = `${cat.value}-${name.toLowerCase().replace(/\s+/g, '-')}`;
    
    seedPros.push({
      id: slug,
      name: name,
      category: cat.value,
      serviceCategory: cat.label,
      description: generateDescription(name, cat.label, city),
      locations: [city.toLowerCase().replace(/\s+/g, '-')],
      location: city.toLowerCase().replace(/\s+/g, '-'),
      phone: `011 ${Math.floor(100 + Math.random() * 900)} ${Math.floor(1000 + Math.random() * 9000)}`,
      email: `info@${name.toLowerCase().replace(/\s+/g, '')}.co.za`,
      website: `www.${name.toLowerCase().replace(/\s+/g, '')}.co.za`,
      avatarSeed: `${cat.value}-image`,
      photos: [
        `https://picsum.photos/seed/${slug}1/800/600`,
        `https://picsum.photos/seed/${slug}2/800/600`,
        `https://picsum.photos/seed/${slug}3/800/600`
      ],
      isUnclaimed: true,
      claimable: true,
      featured: false,
      rating: null,
      reviews: 0,
      priorityRank: 0
    });
  }
});
