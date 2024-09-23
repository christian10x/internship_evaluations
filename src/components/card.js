import React from 'react'
import '../styles/card.css';
import CursoImagen from '../images/Curso-imagen.png';

function Card() {
  return (
    <div className='card'>
      <div className='card-content'>
        <img src={CursoImagen} alt='course image' className='card-image'/>
        <a href='/especifico' className='card-title'>Fisica II</a>
      </div>
    </div>



  )
}

export default Card