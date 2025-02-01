import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import dogIcon from "/src/Assets/dogs.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dogIcon} alt="Dog Icon" />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
