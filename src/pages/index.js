// React Stuff
import { useState } from "react";
import styles from "styles/Home.module.scss";
// Next Stuff
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// 3rdP stuff
import Modal from "components/Modal";
import { LogoFullSmall, Sun, Moon } from "icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// States, Data
import { homepageData } from "data";
import { longFadeIn } from "styles/animations";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Mockoops</title>
        <meta
          name="description"
          content="Create stunning product mockups and simply drag-drop to present your screen-recordings beautifully"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <motion.header className={styles.header} {...longFadeIn}>
        {/* Logo */}
        <div className={styles.logo}>
          <LogoFullSmall color="var(--bg)" />
        </div>

        {/* Navigation Bar */}
        <nav className={styles.nav}>
          {homepageData?.header?.navbarLinks.map(({ href, children }, idx) => (
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
          {homepageData?.header?.bannerButtons.map(
            ({ href, children }, idx) => (
              <Link passHref href={href} key={idx}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  {children}
                </a>
              </Link>
            )
          )}
          {homepageData?.header?.ctas?.map(({ href, children }, idx) => (
            <Link href={href} passHref key={idx}>
              <a className={styles.ctaBtn}>{children}</a>
            </Link>
          ))}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero}>
          {/* Headings */}
          <div className={styles.headingWrapper}>
            {/* Heading item */}
            {homepageData?.hero?.headingItems.map((item, index) => (
              <div key={index} className={styles.item}>
                {item}
              </div>
            ))}
          </div>

          {/* Demo Video */}
          <div
            className={styles.demoVideo}
            onClick={() => setIsVideoExpanded(true)}
          >
            <video
              className={styles.video}
              src={homepageData?.hero?.video?.preview?.src}
              alt={homepageData?.hero?.video?.preview?.alt}
              autoPlay
              loop
            ></video>
            <Modal
              isOpen={isVideoExpanded}
              onRequestClose={() => setIsVideoExpanded(false)}
              contentLabel="Video"
              style={{ width: "900px", height: "500px" }}
            >
              <Embed
                type={homepageData?.hero?.video?.content?.type}
                config={homepageData?.hero?.video?.content}
              />
            </Modal>
          </div>

          {/* Description */}
          <div className={styles.description}>
            {homepageData?.hero?.description}
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            {homepageData?.hero?.ctas?.map(({ href, children, type }, idx) => (
              <Link href={href} passHref key={idx}>
                <a
                  className={[
                    styles.ctaBtn,
                    type === "outline" ? styles.outline : "",
                  ].join(" ")}
                >
                  {children}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className={styles.reviews}>
          {homepageData?.reviewData?.map(
            (
              {
                author: {
                  name,
                  avatar: { src, alt },
                  description,
                },
                review,
              },
              idx
            ) => (
              <div key={idx} className={styles.review}>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <Image
                      src={src}
                      alt={alt}
                      layout="fill"
                      object-fit="cover"
                      object-position="center"
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>{description}</div>
                  </div>
                </div>
                <div className={styles.content}>{review}</div>
              </div>
            )
          )}
        </div>

        {/* Features */}
        <div className={styles.features}></div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}></div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}></footer>
    </div>
  );
}

const Embed = ({ type, config: { src, title, width, height }, ...props }) => {
  switch (type) {
    case "youtube":
      return (
        <iframe
          width={width}
          height={height}
          src={src}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          {...props}
        ></iframe>
      );
    default:
      return null;
  }
};

const reviewData = [
  {
    author: "Mohit Yadav",
    description: "Tinkerer at PckdHQ",
    review:
      "This is so fricking amazing that I'd like to have a call with the CEO of this company. Like literally dude, how good can someone make something?",
  },
  {
    author: "Dhravya Shah",
    description: "",
  },
];
