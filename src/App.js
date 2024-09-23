// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import CoursesPage from './pages/courses';
import PaymentsPage from './pages/payments';
import Navbar from './components/navbar';  // Importar el Navbar
import Header from './components/header';  // Importar el Header
import './css/homepage.css';

function App() {
  return (
    <Router>
      <>
        {/* Coloca el Navbar y el Header fuera del componente Routes */}
        <Navbar />
        <Header />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
