import React from "react";
import ProjectItem from "../project-item";
import styles from "./styles.module.scss";

const ProjectList = (props) => {
  const [projectsType, setProjectsType] = React.useState("Testnet");

  const handleChange = (type) => {
    setProjectsType(type);
  };

  return (
    <div className={styles.projects__container}>
      <div className={styles.projects__switches}>
        <h2
          className={projectsType === "Mainnet" ? styles.active : ""}
          onClick={() => handleChange("Mainnet")}
        >
          Staking
        </h2>
        <span>/</span>
        <h2
          className={projectsType === "Testnet" ? styles.active : ""}
          onClick={() => handleChange("Testnet")}
        >
          Testing
        </h2>
      </div>

      <div className={styles.projects___list}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default ProjectList;
