import styles from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";
import { Props } from './SearchBar.types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchBar ({onSubmit}: Props) {
    const [query, setQuery] = useState<string>("");

    const changeQuery = (event: ChangeEvent<HTMLInputElement>): void => {
      setQuery(event.target.value);
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (!query.trim()) {
        toast.error("Sorry input is empty. You must write somthing!");
        return;
      }
  
      onSubmit(query);
      setQuery("");
    };
  
    return (
        <header className={styles.header}>
            <form className={styles.headerForm} onSubmit={handleSubmit}>
                <input
                    className={styles.searchBar}
                    name='SearchImages'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={changeQuery}
                />
                <button type="submit" className={styles.submitButton}>
                    <FaSearch className={styles.searchBarIcon}/>
                </button>
            </form>
        </header>
    )
  }