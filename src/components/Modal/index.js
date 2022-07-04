import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { modalState } from "state/global";
import { useRecoilState } from "recoil";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [width, height] = useWindowSize();

  let title = null;
  let onClose;
  let isConfetti = false;

  if (modal?.props) {
    const props = modal?.props;
    title = props?.title;
    onClose = props?.onClose || (() => {});
    isConfetti = props?.isConfetti;
  }

  const toggleModal = () => {
    if (modal?.isOpen && onClose) onClose();
    setModal({
      isOpen: !modal.isOpen,
      content: <></>,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={toggleModal}>
        {isConfetti && <Confetti width={width} height={height} />}
      </div>
      <motion.div
        initial={{ opacity: 0, x: "-50%", scale: 0.9, y: "-50%" }}
        animate={{ opacity: 1, x: "-50%", y: "-60%", scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={styles.modalParent}
      >
        {/* Cancel Button */}
        <div className={styles.rightButtons}>
          <button className={styles.btn} onClick={toggleModal}>
            {"×"}
          </button>
        </div>

        {/* Content */}
        <div className={styles.modal}>
          {title && (
            <>
              <h2>{title}</h2>
              <hr />
            </>
          )}
          {modal?.content}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
