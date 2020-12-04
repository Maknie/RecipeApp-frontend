import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navDiv}>
      <div className={styles.logo}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/1404/1404945.svg"
          alt=""
        />
        <Link className={styles.link} to="/">
            <h2>Cooking TIME!</h2>
        </Link>
      </div>

      <ul className={styles.navList}>
        <Link className={styles.link} to="/">
            <li>Home</li>
        </Link>
        <Link className={styles.link} to="/addrecipe">
            <li>Add Recipe</li>
        </Link>
        <Link className={styles.link} to="/about">
            <li>About us</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
