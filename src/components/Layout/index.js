import styles from "./index.module.scss";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <Header />
      {/* Content */}
      <main className={styles.main}>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
