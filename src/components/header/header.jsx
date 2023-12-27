import React from 'react';
import styles from './header.module.css';
import Sun from '../../assets/icons/Sun.svg';
import Moon from '../../assets/icons/Moon.svg';
const header = ({handleToggleTheme, toggleTheme}) => {
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
          {
            toggleTheme ? <img src={Moon} alt="" onClick={handleToggleTheme}/> :<img src={Sun} alt="" onClick={handleToggleTheme}/>
          }
          
        </ul>
      </div>
    </div>
  );
}

export default header;
