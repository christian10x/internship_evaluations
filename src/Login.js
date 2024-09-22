import React from 'react'
import './Login.css'
import logo from './images/logoalter.png'
import { useNavigate } from 'react-router-dom';
import examen from './images/imagenexamen.png'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='Login'>
      <div className='Login-left'>
        <img src={examen} alt='examen' className='Login-examen' />
      </div>

      <div className='Login-right'>

        <div className='Login-cuadro'>

          <img src={logo} alt='logo' className='Login-logo' />
          <h1 className='Login-title'>Iniciar sesión</h1>


          <div className='Login-form'>
            <label htmlFor='username'>Usuario:</label>
            <input type='text' id='username' name='username' placeholder='@utp.edu.pe' />
            
            <label htmlFor='password'>Contraseña:</label>
            <input type='password' id='password' name='password' placeholder='********' />
            
            <button onClick={() => navigate('/cursos')}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login