import { ImageGalleryItem } from '../App/App.types';

export interface Props {
  handleModalOpen: (id: string) => void;
  item: ImageGalleryItem;
}
