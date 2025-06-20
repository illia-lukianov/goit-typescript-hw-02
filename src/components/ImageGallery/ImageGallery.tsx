import { ImageGalleryItem } from '../App/App.types'
import ImageCard from '../ImageCard/ImageCard'
import styles from './ImageGallery.module.css'
import {Props } from './ImageGallery.types'

export default function ImageGallery ({items, handleModalOpen}: Props) {
    return (
    <ul className={styles.gallerylist}>
            {items.map((item:ImageGalleryItem) => {
            return <ImageCard key={item.id} item={item} handleModalOpen={handleModalOpen} />
        })}
    </ul>
)}