import styles from "./header.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";

const Header = ({ onMenuClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.iconMenu}>
        <IconMenu2 stroke={2} onClick={onMenuClick} />
      </div>
      <div className={styles.user}>
        <p>¡Hola, Keyla!</p>
        <IconUserCircle stroke={1.5} />
      </div>
    </div>
  );
};

export default Header;
