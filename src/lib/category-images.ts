import data from './category-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const CategoryImages: ImagePlaceholder[] = data.categoryImages;
