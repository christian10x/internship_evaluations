import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cursos from './pages/Cursos'; 
import Especifico from './pages/Especifico'; 
import Examen from './pages/Examen'; 
import Login from './pages/Login';
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/especifico" element={<Especifico />} />
      <Route path="/examen" element={<Examen />} />
    </Routes>
  );
};

export default App;
