import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import HorarioEstudiantil from "./pages/HorarioEstudiantil";
import ListaPagosEstudiante from "./pages/listaPagosEstudiante";
import CursosEstudiante from "./pages/CursosEstudiante";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 h-[100vh] overflow-y-auto">
            <Header />
            <section className="p-4">
              {/* Configuración de las rutas */}
              <Routes>
                <Route index path="/" element={<Inicio />} />
                <Route path="/Horario" element={<HorarioEstudiantil />} />
                <Route path="/Cursos" element={<CursosEstudiante />} />
                <Route path="/Pagos" element={<ListaPagosEstudiante />} />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};
