// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import CalendarPage from './pages/calendar';
import CoursesPage from './pages/courses';
import CourseDetailsPage from './pages/detalleCurso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
