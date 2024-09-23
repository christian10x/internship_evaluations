import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import styles from "./header.module.css"
import { IconMenu2 } from '@tabler/icons-react';
import { IconUserCircle } from '@tabler/icons-react';

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.iconMenu} onClick={toggleSidebar}>
      <IconMenu2 stroke={2} />
      </div>
      <div className={styles.user}>
      <p>¡Hola, Keyla!</p>
      <IconUserCircle stroke={1.5} />
      </div>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
    </div>
  );
}

export default Header;
