import styles from './LoadMoreBtn.module.css'
import { TiDownload } from "react-icons/ti";
import { Props } from './LoadMoreBtn.types';

export default function LoadMoreBtn ({handleLoadMoreBtn}:Props) {

    return (
        <button className={styles.LoadMoreBtn} type="button" onClick={handleLoadMoreBtn}>
            <TiDownload  className={styles.LoadMoreBtnIcon} />
            <p className={styles.LoadMoreBtnDescr}>Load more</p>
        </button>
    )
  }