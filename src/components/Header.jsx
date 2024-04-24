import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [title, setTitle] = useState("New Questionnaire");
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerFluid}>
        <i className={`fas fa-gas-pump ${styles.icon}`}></i>
        {isEditing ? (
          <input
            type="text"
            className={styles.titleInput}
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            autoFocus
          />
        ) : (
          <div className={styles.titleContainer} onClick={handleTitleClick}>
            {title}
          </div>
        )}
        <button
          className={styles.navbarToggler}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>
        <ul className={`${styles.navbarNav} ${isNavOpen ? styles.open : ''}`}>
          <li className={styles.navItem}>
            <button className={styles.loginBtn}>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
