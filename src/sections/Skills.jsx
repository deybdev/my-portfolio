import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      percent: 95,
      iconClass: "ri-html5-line",
      color: "#fa6e00",
      category: "Frontend",
    },
    {
      name: "CSS",
      percent: 80,
      iconClass: "ri-css3-line",
      color: "#264de4",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      percent: 75,
      iconClass: "ri-javascript-line",
      color: "#f7df1e",
      category: ["Frontend", "Backend"],
    },
    {
      name: "Java",
      percent: 80,
      iconClass: "ri-java-line",
      color: "#5382a1",
      category: "Backend",
    },
    {
      name: "React",
      percent: 50,
      iconClass: "ri-reactjs-line",
      color: "#61dbfb",
      category: "Frontend",
    },
    {
      name: "PHP",
      percent: 65,
      iconClass: "ri-php-line",
      color: "#8892be",
      category: "Backend",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) =>
          Array.isArray(skill.category)
            ? skill.category
                .map((c) => c.toLowerCase())
                .includes(selectedCategory.toLowerCase())
            : skill.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className={styles.skillSection} id="skills">
      <h3 className="section-title">My Skills</h3>

      <div className={styles.skillContainer}>
        <div className={styles.buttons}>
          {["All", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.activeButton : ""
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.skillList}>
          {filteredSkills.map((skill, index) => (
            <div
              className={styles.skillItem}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={styles.circle}
                style={{
                  background: `conic-gradient(${skill.color} ${
                    skill.percent * 3.6
                  }deg, rgba(217, 217, 217, 0.2) 0deg)`,
                }}
              >
                <div className={styles.innerCircle}>
                  <i
                    className={`ri ${skill.iconClass}`}
                    style={{ color: skill.color }}
                  ></i>
                </div>
              </div>
              <div className={styles.percent}>{skill.percent}%</div>
              <div className={styles.name}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
