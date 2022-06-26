import { motion, AnimatePresence } from "framer-motion";
import { LogoFull, BackButton } from "icons";
import styles from "./index.module.scss";
import Link from "next/link";

const Loader = ({ children, showBack = false }) => {
  return (
    <AnimatePresence>
      {showBack && (
        <Link href="/" passHref>
          <a className={styles.backBtn}>
            <BackButton color="var(--bg)" />
            <span>Home</span>
          </a>
        </Link>
      )}
      <motion.section
        className={styles.wrapper}
        initial={{ y: 10, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        exit={{ y: 10, opacity: 1, scale: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <LogoFull color="var(--bg)" />
        <div className="content">{children}</div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Loader;
