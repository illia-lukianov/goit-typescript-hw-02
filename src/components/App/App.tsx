import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import galleryQuery from '../../../API-query/gallery-query';
import { useEffect, useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { ImageGalleryItem } from './App.types';

export default function App() {
  const [items, setItems] = useState<ImageGalleryItem[]>([]);
  const [errors, setErrors] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<ImageGalleryItem | null>(null);
  const [query, setQuery] = useState<string>("");

  const submitSearchBar = (value: string) => {
    setItems([]);
    setPage(1);
    setQuery(value);
  };

  useEffect(() => {
    if (!query.trim()) return;

    const fetchImages = async () => {
      try {
        setErrors(false);
        setLoader(true);
        const response = await galleryQuery(query, page);
        const data = response.data.results;

        if (!data || data.length === 0) {
          toast.error('Sorry, nothing found...', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          return;
        }

        setItems(prevData => [...prevData, ...data]);
      } catch (error) {
        setErrors(true);
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, [query, page]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const handleModalOpen = (id: string): void => {
    const foundImage = items.find(item => item.id === id) ?? null;
    setCurrentImage(foundImage);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={submitSearchBar} />
      <ImageGallery items={items} handleModalOpen={handleModalOpen} />
      {isModalOpen && currentImage && (
        <ImageModal
          currentImage={currentImage}
          isModalOpen={isModalOpen}
          closeModal={handleModalClose}
        />
      )}
      {items.length > 0 && <LoadMoreBtn handleLoadMoreBtn={handleLoadMoreBtn} />}
      {loader && <Loader />}
      {errors && <ErrorMessage />}
      <ToastContainer />
    </>
  );
}