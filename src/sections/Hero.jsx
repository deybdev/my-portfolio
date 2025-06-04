import styles from "./Hero.module.css";
import heroImage from "../assets/hero-img.png";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const socialLinks = [
    { href: "#", iconClass: "ri-instagram-line" },
    { href: "#", iconClass: "ri-github-line" },
    { href: "#", iconClass: "ri-facebook-box-line" },
    { href: "#", iconClass: "ri-linkedin-box-line" },
  ];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <p>Hello, I'm</p>
        <p>Efren Dave Cahilig</p>
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "Software Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className={styles.typing}
        />
        <div className={styles.icons}>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.icon}>
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
        <div className={styles.buttons}>
          <button>Hire Me</button>
          <button>Dowload Cv</button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imgBg}>
          <img
            src={heroImage}
            alt="Your Profile"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
