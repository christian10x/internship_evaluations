import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ventana1 from "./screens/Ventana1";
import Ventana2 from "./screens/Ventana2";
import Ventana3 from "./screens/Ventana3";
// import Ventana4 from "./screens/Ventana4";
import { HorarioProvider } from "./components/HorarioContext";

function App() {
  return (
    <>
      <HorarioProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Ventana1/>}></Route>
            <Route path="/curso/:cursoId" element={<Ventana2/>}/>
            <Route path="/matricula/horario" element={<Ventana3/>}/>
            {
              // TODO: ventana de confirmación de matricula (info de cursos seleccionados)
              // <Route path="/matricula/confirmacion" element={<Ventana4/>}/>
            }
          </Routes>
        </Router>
      </HorarioProvider>
    </>
  )
}

export default App
