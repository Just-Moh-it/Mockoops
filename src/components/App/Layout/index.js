import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const Center = dynamic(() => import("./Center"), {
  ssr: false,
});

import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Middle Window + Right Sidebar */}
      <Center />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default Layout;
