import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="logo.png" alt="" />
      <ul>
        <a href="#">
          <li>Sobre nós</li>
        </a>
        <a href="#">
          <li className={styles.list}>Soluções</li>
        </a>
        <a href="#">
          <li className={styles.list}>Carreiras</li>
        </a>
        <a href="#">
          <li className={styles.list}>Treinamentos</li>
        </a>
      </ul>
      <div className={styles.navigate}>
        <div className={styles.searchBox}>
          <img src="lupa.png" alt="" />
          <input type="text" name="" id="" placeholder="Buscar..." />
        </div>
        <div className={styles.entrar}>Entrar</div>
      </div>
    </header>
  );
};
