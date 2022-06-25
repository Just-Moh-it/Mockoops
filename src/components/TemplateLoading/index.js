import styles from "./index.module.scss";

const TemplateLoading = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loadingText}>Template is Loading!</span>
    </div>
  );
};

export default TemplateLoading;
