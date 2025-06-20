import { ImageGalleryItem } from '../App/App.types';

export interface Props {
  items: ImageGalleryItem[];
  handleModalOpen: (id: string) => void;
}
