import React, { useEffect } from "react";
import styles from "./About.module.css";
import profileImage from "../assets/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      <h3 className="section-title" data-aos="fade-down" data-aos-delay={100}>
        About Me
      </h3>
      <div className={styles.container}>
        <div
          className={styles.imgContainer}
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <img src={profileImage} alt="Your Profile" className={styles.image} />
        </div>
        <div
          className={styles.textContainer}
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <p className={styles.text}>
            I’m a web developer in training, always curious and eager to learn.
            As a 3rd-year Information Technology student, I’m building websites
            step by step to improve my skills. I’m using React JS to create
            better and faster web applications. With each project, I get better
            at turning ideas into real websites that people enjoy using. I want
            to build digital experiences that connect with users, not just
            websites that work. Every challenge teaches me something new, and
            every solution helps me grow. My goal is to become a skilled web
            developer who can create useful and beautiful websites. I’m excited
            to keep learning and building new things, one line of code at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
