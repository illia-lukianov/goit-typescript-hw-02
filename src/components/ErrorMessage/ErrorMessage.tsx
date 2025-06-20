import { toast, ToastContainer } from 'react-toastify';
import styles from './ErrorMessage.module.css'

export default function ErrorMessage() {
    toast.error('Sorry nothing found...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    return (
        <>
            <ToastContainer />
        </>
    )
}