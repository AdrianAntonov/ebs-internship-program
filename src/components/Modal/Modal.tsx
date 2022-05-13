import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

const modal: any = document.querySelector("#modal");

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
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
};

export default Modal;
