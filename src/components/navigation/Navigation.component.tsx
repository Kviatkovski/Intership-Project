import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.description}>
        <p className={styles.date}>
          <span>სლოტები</span> 10 სექტემბერი - 7 ნოემბერი
        </p>
        <h4>მოიპოვე 10 საგზურიდან ერთ-ერთი</h4>
        <p className={styles.adText}>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      </div>
      <div className={styles.navigation}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          to={"/"}
          end
        >
          <p className={styles.navDate}>28 ოქტ. - 7 ნოემ.</p>
          <p className={styles.navType}>Cash Games</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          to={"new-year-series"}
        >
          <p className={styles.navDate}>10 - 29 დეკ.</p>
          <p className={styles.navType}>New year Series</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          to={"final-stage"}
        >
          <p className={styles.navDate}>28 ოქტ. - 7 ნოემ.</p>
          <p className={styles.navType}>Final Stage</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
