import React from "react";
import styles from "./Projects.module.css";
import lemsImage from "../assets/lems.png";
import naturesImage from "../assets/naturesbasket.jpg";
import travelTogetherImage from "../assets/traveltogether.jpg";
import digimartImage from "../assets/qcudigimart.jpg";

const projectsData = [
  {
    id: 1,
    name: "LEMS",
    image: lemsImage,
    description: "A personal portfolio to showcase my projects and skills.",
    languages: ["js", "react", "html", "css"],
    githubUrl:
      "https://github.com/deybdev/laboratory-equipment-management-system",
  },
  {
    id: 2,
    name: "Nature's Basket",
    image: naturesImage,
    description: "A task management app with drag & drop support.",
    languages: ["js", "react"],
    githubUrl: "https://github.com/deybdev/Nature-s-basket",
  },
  {
    id: 3,
    name: "Travel Together",
    image: travelTogetherImage,
    description: "A task management app with drag & drop support.",
    languages: ["js", "react"],
    githubUrl: "https://github.com/deybdev/traveltogether",
  },
  {
    id: 4,
    name: "QCU Digimart",
    image: digimartImage,
    description: "A task management app with drag & drop support.",
    languages: ["js", "react"],
    githubUrl: "https://github.com/deybdev/qcudigimart",
  },
];

const languageIconMap = {
  js: { className: "ri-braces-fill", color: "#f0db4f", title: "JavaScript" },
  react: { className: "ri-reactjs-fill", color: "#61dafb", title: "React" },
  html: { className: "ri-html5-fill", color: "#e34c26", title: "HTML5" },
  css: { className: "ri-css3-fill", color: "#264de4", title: "CSS3" },
};

const Projects = () => {
  return (
    <div className={styles.projectSection}>
      <h3 className="section-title">My Projects</h3>
      <div className={styles.projectContainer}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
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
