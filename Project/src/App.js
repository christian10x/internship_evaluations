import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './public/pages/home.page';
import SchedulePage from './utp/pages/schedule.page'; // Nueva página para mostrar el horario

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta para la página principal (cursos matriculados) */}
                <Route path="/" element={<HomePage />} />

                {/* Ruta para la página del horario */}
                <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
        </Router>
    );
}

export default App;
