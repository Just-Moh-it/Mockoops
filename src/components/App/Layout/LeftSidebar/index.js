import { useState, useCallback } from "react";
import styles from "./index.module.scss";
import { Menu, Logo, Sun, Moon } from "../../../../icons";
import { useTheme } from "next-themes";
import { Shortcut } from "@shopify/react-shortcuts";

import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.wrapper}>
      {/* Top Header */}
      <header className={styles.header}>
        {/* Menu Items */}
        <button className={styles.menu}>
          <Menu color="var(--primary-lightest)" />
        </button>
        {/* Logo */}
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Logo color="var(--bg)" />
          </a>
        </Link>
        {/* Collapse Button */}
        <button className={styles.theme} onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon color="var(--primary-lightest)" />
          ) : (
            <Sun color="var(--primary-lightest)" />
          )}
        </button>
        <Shortcut
          held={[["Control"], ["Meta"]]}
          ordered={["u"]}
          onMatch={toggleTheme}
        />
      </header>

      {/* Template Options */}
      <div className={styles.content}>
        <form className={styles.templates}>
          <div className={styles.top}>
            <h3 className={styles.heading}>Pick a template</h3>
          </div>
          <fieldset id="templates" className={styles.list}>
            {dummyData?.templates.map(
              ({ id, thumbnailSrc, title, duration }) => (
                <label htmlFor={id} className={styles.item} key={id}>
                  <input
                    id={id}
                    name="templates"
                    type="radio"
                    value={id}
                    defaultChecked={id == "getting-started"}
                  />
                  {/* Thumbnail */}
                  <div className={styles.thumbnail}>
                    <Image src={thumbnailSrc} layout="fill" alt="Preview" />
                  </div>

                  {/* Title */}
                  <h4 className={styles.title}>{title}</h4>

                  {/* Duration */}
                  <span className={styles.duration}>{duration}</span>
                </label>
              )
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const dummyData = {
  templates: [
    {
      id: "getting-started",
      thumbnailSrc: "/assets/icons/gradients/1.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Reddish",
      thumbnailSrc: "/assets/icons/gradients/2.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Orangish",
      thumbnailSrc: "/assets/icons/gradients/3.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Lolist",
      thumbnailSrc: "/assets/icons/gradients/4.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Pottish",
      thumbnailSrc: "/assets/icons/gradients/5.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Yourish",
      thumbnailSrc: "/assets/icons/gradients/6.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
    {
      id: "Bowish",
      thumbnailSrc: "/assets/icons/gradients/7.svg",
      title: "Gradients",
      duration: "10:30 min",
    },
  ],
};

export default LeftSidebar;
