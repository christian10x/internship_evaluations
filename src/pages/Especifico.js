import '../pagesstyles/Especifico.css';
import Test from '../components/test';
import TopBar from '../components/topbar';
import { useNavigate } from 'react-router-dom'; 

function Especifico() {
    const navigate = useNavigate(); 

    return (
        <div className="App">
            <TopBar />
            <main className='main-container'>

                <div className='detalle-container'>
                    <button className='back-button' onClick={() => navigate('/cursos')}>Volver</button>
                    <div className='title-container'>
                        <h1>Fisica II</h1>
                    </div>
                    
                    <div className='ciclo-container'>
                        <h2>Examenes disponibles</h2>
                    </div>
                </div>

                <div className='test-container-wrapper'>
                    <div className='test-container'>
                        <Test />
                    </div>
                    <div className='test-container'>
                        <Test />
                    </div>
                    <div className='test-container'>
                        <Test />
                    </div>
                    <div className='test-container'>
                        <Test />
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Especifico;
