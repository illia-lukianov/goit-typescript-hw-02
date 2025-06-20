export type ImageGalleryItem = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  color: string;
  description: string;
  likes: number;
};
