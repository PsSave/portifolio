import React from 'react';
import styles from './header.module.css';

const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <h1>Portfolio</h1>
      </div>
      <div className={styles.header_nav}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default header;
