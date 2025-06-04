import { useEffect } from "react";
import styles from "./Projects.module.css";
import lemsImage from "../assets/lems.png";
import naturesImage from "../assets/naturesbasket.jpg";
import travelTogetherImage from "../assets/traveltogether.jpg";
import digimartImage from "../assets/qcudigimart.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const projectsData = [
  {
    id: 1,
    name: "LEMS",
    image: lemsImage,
    description:
      "A Laboratory Equipment Management System for tracking and organizing lab resources efficiently.",
    languages: ["java", "mysql"],
    githubUrl:
      "https://github.com/deybdev/laboratory-equipment-management-system",
  },
  {
    id: 2,
    name: "Nature's Basket",
    image: naturesImage,
    description:
      "An e-commerce platform for organic products with a clean UI and intuitive shopping experience.",
    languages: ["vb", "mysql"],
    githubUrl: "https://github.com/deybdev/Nature-s-basket",
  },
  {
    id: 3,
    name: "Travel Together",
    image: travelTogetherImage,
    description:
      "A social travel planning app where users can explore destinations and collaborate on trips.",
    languages: ["html", "css", "js", "php", "mysql", "api"],
    githubUrl: "https://github.com/deybdev/traveltogether",
  },
  {
    id: 4,
    name: "QCU Digimart",
    image: digimartImage,
    description:
      "A campus-based digital marketplace built for students and sellers at Quezon City University.",
    languages: ["html", "css", "js", "php", "mysql"],
    githubUrl: "https://github.com/deybdev/qcudigimart",
  },
];

const languageIconMap = {
  js: { className: "ri-braces-fill", color: "#f0db4f", title: "JavaScript" },
  react: { className: "ri-reactjs-fill", color: "#61dafb", title: "React" },
  html: { className: "ri-html5-fill", color: "#e34c26", title: "HTML5" },
  css: { className: "ri-css3-fill", color: "#264de4", title: "CSS3" },
  php: { className: "ri-php-fill", color: "#8892be", title: "PHP" },
  java: { className: "ri-java-fill", color: "#007396", title: "Java" },
  vb: { className: "ri-file-code-fill", color: "#68217A", title: "Visual Basic" },
  mysql: { className: "ri-database-2-fill", color: "#00758F", title: "MySQL"},
  api: { className: "ri-plug-line", color: "#007acc", title: "API"},
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className={styles.projectSection} id="projects">
      <h3 className="section-title" data-aos="fade-down" data-aos-delay={100}>
        My Projects
      </h3>
      <div className={styles.projectContainer}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className={styles.imageWrapper}>
              <a href={project.githubUrl} target="_blank">
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImage}
                />
                <div className={styles.blurOverlay}></div>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubOverlay}
                aria-label={`GitHub repo of ${project.name}`}
              >
                <i className={`ri-github-fill ${styles.githubIcon}`}></i>
              </a>
            </div>
            <div className={styles.projectContent}>
              <h4 className={styles.projectName}>{project.name}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.languages}>
                {project.languages.map((lang) => {
                  const icon = languageIconMap[lang];
                  return (
                    <i
                      key={lang}
                      className={icon.className + " lang-icon"}
                      title={icon.title}
                      style={{ color: icon.color }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
