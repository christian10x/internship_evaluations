import { Link, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css"
import { IconHome } from '@tabler/icons-react';
import { IconBook2 } from '@tabler/icons-react';
import { IconCalendarMonth } from '@tabler/icons-react';
import { IconReceipt2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';

const Sidebar = ({isOpen, toggleSidebar }) => {

  const location = useLocation();

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.iconClose}>
      <IconX stroke={2} color="white" onClick={handleLinkClick}/>
      </div>
      <img
        alt="logo"
        src="https://xpedition.utp.edu.pe/wp-content/themes/xpedition/img/logo.png"
      />
      <ul>
        <li>
        <Link to={`/`}>
            <div className={`${styles.liContainer} ${location.pathname === "/" ? styles.selected : ""}`} onClick={handleLinkClick}>
            <IconHome className={styles.icon} stroke={2} />
              HOME
            </div>
          </Link>
        </li>
        <li>
        <Link to={`/cursos`}>
            <div className={`${styles.liContainer} ${location.pathname === "/cursos" ? styles.selected : ""}`} onClick={handleLinkClick}>
            <IconBook2 className={styles.icon} stroke={2} />
              CURSOS
            </div>
          </Link>
        </li>
        <li>
        <Link to={`/horario`}>
            <div className={`${styles.liContainer} ${location.pathname === "/horario" ? styles.selected : ""}`} onClick={handleLinkClick}>
            <IconCalendarMonth className={styles.icon} stroke={2} />
              HORARIO
            </div>
          </Link>
        </li>
        <li>
          <Link to={`/pagos`}>
            <div className={`${styles.liContainer} ${location.pathname === "/pagos" ? styles.selected : ""}`} onClick={handleLinkClick}>
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