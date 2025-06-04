import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerLinks = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skills", name: "Skills" },
    { href: "#projects", name: "Projects" },
    { href: "#contact", name: "Contact" },
  ];

  const footerIcons = [
    {
      href: "https://www.instagram.com/e.deybb/",
      iconClass: "ri-instagram-line",
      name: "Instagram",
    },
    {
      href: "https://github.com/deybdev",
      iconClass: "ri-github-line",
      name: "Github",
    },
    {
      href: "https://www.facebook.com/efrendave19",
      iconClass: "ri-facebook-box-line",
      name: "Facebook",
    },
    { href: "#", iconClass: "ri-linkedin-box-line", name: "LinkedIn" },
  ];
  return (
    <footer className={styles.footerSection}>
      <h3 className={styles.logo}>DeybDev</h3>
      <div className={styles.footerLinks}>
        <ul>
          {footerLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerIcons}>
        {footerIcons.map((icon, i) => (
          <a key={i} href={icon.href} target="_blank" title={icon.name}>
            <i className={icon.iconClass}></i>
          </a>
        ))}
      </div>
      <div className={styles.footerContacts}>
        <p>
          <i className="ri-mail-line"></i>davecahilig19@gmail.com
        </p>
        <p>
          <i className="ri-phone-line"></i>+639 6185 86961{" "}
        </p>
      </div>
      <hr />
      <div className={styles.copyRight}>
        <p>Designed by @mahmood.fazile UI/UX Designer</p>
      </div>
    </footer>
  );
};

export default Footer;
