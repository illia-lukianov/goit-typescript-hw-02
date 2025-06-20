import { ImageGalleryItem } from '../App/App.types';

export type UnsplashResponse = {
  results: ImageGalleryItem[];
  total: number;
  total_pages: number;
};
