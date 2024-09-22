import './Cursos.css';
import Card from './components/card';
import TopBar from './components/topbar';

function Cursos() {
  return (
    <div className="Cursos">
      <TopBar />
    
      <main className='main-container'>
        <div className='content-wrapper'>
          <div className='detalle-container'>
            <h2 className='main-title'>Cursos</h2>
            <h3 className='sub-title'>2024 - Ciclo 2 Agosto PREG (001) (Actual)</h3>
          </div>

          <div className='cards-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cursos;
