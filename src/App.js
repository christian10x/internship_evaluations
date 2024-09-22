import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cursos from './Cursos'; 
import Especifico from './Especifico'; 
import Examen from './Examen'; 
import Login from './Login';
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
