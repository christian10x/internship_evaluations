import React from 'react'
import { FaBook, FaUser, FaChalkboard } from 'react-icons/fa';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div className='SideBar active'>
        <ul>
            <li><a href="./cursos"><FaBook /> Cursos</a></li>
            <li><a href="https://portal.utp.edu.pe"><FaUser /> Portal</a></li>
            <li><a href="https://class.utp.edu.pe"><FaChalkboard /> Clases</a></li>
        </ul>
    </div>
  )
}

export default NavBar