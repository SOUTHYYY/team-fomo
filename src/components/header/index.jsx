import React from "react";
import styles from "./styles.module.scss";
import gitHubIcon from "../../assets/icons/github.svg";

const Header = () => (
  <header>
    <div className={styles.header__logo}>
      <h2>TEAM</h2>
      <h2 className={styles.green}>FOMO</h2>
    </div>
    <ul>
      <li>About us</li>
      <li>Projects</li>
    </ul>
    <ul>
      <li>
        <img src={gitHubIcon} alt="github" />
      </li>
    </ul>
  </header>
);

export default Header;
