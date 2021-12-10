import React from "react";
import styles from "./styles.module.scss";

export const ProjectItem = () => {
  return (
    <div className={styles.item__container}>
      <div className={styles.item__image}>
        <img src="http://4block.team/images/logo10.png" alt="item" />
      </div>
      <div className={styles.item__title}>PROJECT NAME</div>
    </div>
  );
};

export default ProjectItem;
