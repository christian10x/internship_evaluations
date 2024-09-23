import { Link, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css"
import { IconHome } from '@tabler/icons-react';
import { IconBook2 } from '@tabler/icons-react';
import { IconCalendarMonth } from '@tabler/icons-react';
import { IconReceipt2 } from '@tabler/icons-react';

const Sidebar = ({isOpen}) => {

  const location = useLocation();

  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}>
      <img
        alt="logo"
        src="https://xpedition.utp.edu.pe/wp-content/themes/xpedition/img/logo.png"
      />
      <ul>
        <li>
        <Link to={`/`}>
            <div className={`${styles.liContainer} ${location.pathname === "/" ? styles.selected : ""}`}>
            <IconHome className={styles.icon} stroke={2} />
              HOME
            </div>
          </Link>
        </li>
        <li>
        <Link to={`/cursos`}>
            <div className={`${styles.liContainer} ${location.pathname === "/cursos" ? styles.selected : ""}`}>
            <IconBook2 className={styles.icon} stroke={2} />
              CURSOS
            </div>
          </Link>
        </li>
        <li>
        <Link to={`/horario`}>
            <div className={`${styles.liContainer} ${location.pathname === "/horario" ? styles.selected : ""}`}>
            <IconCalendarMonth className={styles.icon} stroke={2} />
              HORARIO
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/pagos`}>
            <div className={`${styles.liContainer} ${location.pathname === "/pagos" ? styles.selected : ""}`}>
            <IconReceipt2 className={styles.icon} stroke={2} />
              PAGOS
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default Sidebar;