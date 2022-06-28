import styles from "./index.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <span>
        &copy; 2022; Cretead for the{" "}
        <Link
          href="https://townhall.hashnode.com/build-with-linode-hackathon-june-2022"
          passHref
        >
          <a className="underline">Hashnode {"×"} Linode Hackathon</a>
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
