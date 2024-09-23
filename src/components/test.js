import React from 'react'
import '../styles/test.css';
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate();

  return (
    <div className='test-container'>

      <div className='test-content'>
        
        <h3 className='test-title'>Practica Calificada 1 Fisica II</h3>

        <button className='test-button' onClick={() => navigate('/examen')}>Empezar</button>

      </div>

    </div>
  )
}

export default Test