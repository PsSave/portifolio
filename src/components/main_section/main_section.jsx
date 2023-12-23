import React from 'react';
import styles from './main_section.module.css';
import image from '../../assets/perfil.jpeg';
const main_section = () => {
  return (
    <div className={styles.main}>
      <div className={styles.introduce}>
        <h4>Pedro Samuel Soares Simão</h4>
        <h2>Desenvolvedor Web</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi in fugit expedita! Illo, a quod. A voluptatibus reiciendis aut repellendus voluptas et adipisci maxime quasi, id commodi expedita facilis!</p>
        <div className={styles.button}>
          <button>Contato</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="Pedro Samuel" />
      </div>
    </div>
  );
}

export default main_section;
