import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modal: any = document.querySelector("#modal");

function Modal({ onClose, children }: any) {
  const handleCloseModal = (e: any) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleCloseOverlay = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    return () => {
      window.removeEventListener("keydown", handleCloseModal);
    };
  });

  return createPortal(
    <div className={styles.overlay} onClick={handleCloseOverlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modal
  );
}

export default Modal;
