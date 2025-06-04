import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightMode") === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (lightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLightMode = () => {
    setLightMode((prev) => !prev);
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < links.length; i++) {
        const section = document.querySelector(links[i].href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>DeybDev</div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ""}`}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className={activeIndex === i ? styles.active : ""}
                onClick={() => handleActiveIndex(i)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.toggleMode} title={!lightMode ? "Toggle Light Mode" : "Toggle Dark Mode"} onClick={toggleLightMode}>
        <i className={!lightMode ? "ri-sun-fill" : "ri-moon-fill"}></i>
      </button>

      <button className={styles.menu}  onClick={toggleMenu}>
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>
    </header>
  );
};

export default Header;
