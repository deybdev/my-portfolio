import { useEffect } from "react";
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className={styles.contactSection} id="contact">
      <h3 className="section-title" data-aos="fade-down" data-aos-delay={100}>
        Contact Me
      </h3>
      <div className={styles.contactContainer}>
        <form
          className={styles.contactForm}
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <div
            className={styles.formBody}
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <div className={styles.formLeft}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div
              className={styles.formRight}
              data-aos="fade-up-left"
              data-aos-delay={100}
            >
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="8"
                placeholder="Your Message"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
