import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mockoops</title>
        <meta
          name="description"
          content="Create stunning product mockups and simply drag-drop to present your screen-recordings beautifully"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}></div>

        {/* Navigation Bar */}
        <nav className={styles.nav}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/app" outlined>
            Get Started
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}></main>

      {/* Footer */}
      <footer className={styles.footer}></footer>
    </div>
  );
}

const NavLink = ({ href, children, outlined }) => {
  return (
    <Link passHref href={href}>
      <a
        className={[styles.navLink, outlined ? styles.outlined : ""].join(" ")}
      >
        {children}
      </a>
    </Link>
  );
};
