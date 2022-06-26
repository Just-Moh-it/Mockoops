import { useEffect } from "react";
import styles from "./index.module.scss";

const ModalComponent = ({
  children,
  isOpen,
  onRequestClose,
  classNames,
  ...props
}) => {
  if (!isOpen) {
    return null;
  }

  // Set body scrolling to none
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={onRequestClose}></div>

      {/* Modal */}
      <div
        className={[styles.content, ...(classNames ? classNames : [])].join(
          " "
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
