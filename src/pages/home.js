import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ImageSlider from "../components/imageSlider";
import Modalidad from "../components/modalidad";
import CursosCiclo from "../components/cursosCiclo";
import ResumenGeneral from "../components/resumenGeneral";
import Interes from "../components/interes";
import Horario from "../components/horario";
import '../css/homepage.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Header />
        <ImageSlider />
        <div className="main_content">
          <div className="izquierda">
            <Modalidad />
            <div className="ciclo">
              <div className="ciclo-content">
                <CursosCiclo />
                <ResumenGeneral />
              </div>
              <div className="interes">
              <Interes />
              </div>
              
            </div>
            
          </div>
          <div className="horario">
            <Horario />
          </div>
        </div>
        
      </div>
      
      
    </>
  );
}

export default HomePage;