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
      <div className="main_content">
        <Header />
        <ImageSlider />
        <Modalidad />
        <CursosCiclo />
        <ResumenGeneral />
        <Interes />
        <Horario />
      </div>
      
      
    </>
  );
}

export default App;
