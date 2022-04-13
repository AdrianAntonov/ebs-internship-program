import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modal = document.querySelector("#modal");

function Modal({ children }) {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modal
  );
}

export default Modal;
