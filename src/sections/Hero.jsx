import styles from "./Hero.module.css";
import heroImage from "../assets/hero-img.png";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const socialLinks = [
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
    <section className={styles.hero} id="home">
      <div className={styles.left} data-aos="fade-down" data-aos-delay={100}>
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
            <a
              key={index}
              href={link.href}
              className={styles.icon}
              title={link.name}
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
        <div className={styles.buttons}>
          <button>Hire Me</button>
          <button>Dowload Cv</button>
        </div>
      </div>

      <div className={styles.right} data-aos="fade-up" data-aos-delay={100}>
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
