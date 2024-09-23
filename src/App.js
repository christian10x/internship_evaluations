import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import ImageSlider from "./components/imageSlider";
import Modalidad from "./components/modalidad";
import CursosCiclo from "./components/cursosCiclo";
import ResumenGeneral from "./components/resumenGeneral";
import Interes from "./components/interes";
import Horario from "./components/horario";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Header />
        <ImageSlider />
        <Modalidad />
        
        <div className="main-content">
          <div className="izquierda">
            <CursosCiclo />
            <ResumenGeneral />
          </div>
          <div className="derecha">
            <Interes />
            <Horario />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
