import styles from "./index.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <span>
        &copy; 2022; Support this project through{" "}
        <Link href="https://github.com/sponsors/just-moh-it" passHref>
          <a className="underline">💰 GitHub Sponsors</a>
        </Link>
      </span>
      <span>
        Coded with {"🤍 and ☕️"} by{" "}
        <Link href="https://mohitya.dev" passHref>
          <a className="underline">Mohit</a>
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
