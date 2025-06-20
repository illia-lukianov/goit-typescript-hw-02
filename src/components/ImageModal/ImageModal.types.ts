import { ImageGalleryItem } from '../App/App.types';

export interface Props {
  currentImage: ImageGalleryItem;
  isModalOpen: boolean;
  closeModal: () => void;
}
