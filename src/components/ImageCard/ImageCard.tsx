import styles from './ImageCard.module.css'
import { Props } from './ImageCard.types'

export default function ImageCard ({item: {alt_description, urls, id}, handleModalOpen}:Props) {
    return (
        <img className={styles.cardImg} src={urls.small} onClick={() => handleModalOpen(id)} alt={alt_description} />
    )
}