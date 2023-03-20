import { useState } from "react";
// Next
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
// Miscelaneous
import { useTheme } from "next-themes";
import { Shortcut } from "@shopify/react-shortcuts";
import { useRecoilState } from "recoil";
import { templates } from "animations/templates";
import { secondsToTime } from "utils";

// State
import { templateIdState } from "state/global";

// Icons
import { Menu, Logo, Sun, Moon } from "icons";

const LeftSidebar = () => {
  const { theme, setTheme } = useTheme();
  const [currentTemplateId, setCurrentTemplateId] =
    useRecoilState(templateIdState);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleChangeTemplate = ({ target: { value } }, _) => {
    setCurrentTemplateId(value);
  };

  return (
    <div
      className={[styles.wrapper, isCollapsed ? styles.collapsed : ""].join(
        " "
      )}
    >
      {/* Top Header */}
      <header className={styles.header}>
        {/* Menu Items */}
        <button
          className={styles.menu}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
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
            {templates?.map(({ id, title, fps, durationInFrames }) => (
              <label htmlFor={id} className={styles.item} key={id}>
                <input
                  id={id}
                  name="templates"
                  type="radio"
                  value={id}
                  checked={currentTemplateId === id}
                  onChange={handleChangeTemplate}
                />
                {/* Thumbnail */}
                <div className={styles.thumbnail}>
                  <Image
                    src={`/assets/thumbnails/${id}.png`}
                    layout="fill"
                    alt="Preview"
                  />
                </div>

                {/* Title */}
                <h4 className={styles.title}>{title}</h4>

                {/* Duration */}
                <span className={styles.duration}>
                  {secondsToTime(Math.floor(durationInFrames / fps))}
                </span>
              </label>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LeftSidebar;
