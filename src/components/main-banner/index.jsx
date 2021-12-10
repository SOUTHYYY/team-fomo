import React from "react";
import fomo1 from "../../assets/fomo1.png";
import fomo2 from "../../assets/fomo2.png";
import styles from "./styles.module.scss";

const MainBanner = () => (
  <div className={styles.banner}>
    <div className={styles.banner__title}>
      <div className={styles.banner__title_top}>
        <h1>We offer secure</h1>
        <h1 className={styles.green}>non-custodial</h1>
      </div>
      <div className={styles.banner__title_bottom}>
        <h1 className={styles.green}>staking service!</h1>
        <span>
          Stake digital assets and earn rewards
          <br />
          by securing supported blockchain
        </span>
      </div>
    </div>
    <div className={styles.image__container}>
      <img src={fomo1} alt="user" width="700" height="600" />
      <img src={fomo2} alt="user" width="500" height="450" />
    </div>
  </div>
);

export default MainBanner;
