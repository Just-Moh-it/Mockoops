import { header as headerData } from "data";

// Next Stuff
import { useRouter } from "next/router";
import Link from "next/link";

// 3rd Party
import { useTheme } from "next-themes";

// Visuals
import { motion } from "framer-motion";
import { Sun, Moon, LogoFullSmall } from "icons";
import { longFadeIn } from "styles/animations";
import styles from "./index.module.scss";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.header className={styles.wrapper} {...longFadeIn}>
      {/* Logo */}
      <div className={styles.logo}>
        <LogoFullSmall color="var(--bg)" />
      </div>

      {/* Navigation Bar */}
      <nav className={styles.nav}>
        {headerData?.navbarLinks.map(({ href, children }, idx) => (
          <Link passHref href={href} key={idx}>
            <a
              className={[
                styles.navLink,
                // Check if navlink is active
                (
                  router.pathname === "/" // is path equal to home
                    ? href === "/" // if yes, is href exactly equal to path
                    : router.pathname.startsWith(href)
                )
                  ? // else, is path starting with href
                    styles.active // apply styles if yes
                  : "", // don't apply styles if not
              ].join(" ")}
            >
              {children}
            </a>
          </Link>
        ))}
      </nav>
      {/* Right Side Links */}
      <div className={styles.right}>
        <button className={styles.iconLink} onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon color="var(--bg)" />
          ) : (
            <Sun color="var(--bg)" />
          )}
        </button>
        {headerData?.bannerButtons.map(({ href, children }, idx) => (
          <Link passHref href={href} key={idx}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              {children}
            </a>
          </Link>
        ))}
        {headerData?.ctas?.map(({ href, children }, idx) => (
          <Link href={href} passHref key={idx}>
            <a className={"ctaBtn"}>{children}</a>
          </Link>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
