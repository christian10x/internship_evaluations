import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionSingleChoice from './components/QuestionSingleChoice';
import QuestionMultipleChoice from './components/QuestionMultipleChoice';
import QuestionTextInput from './components/QuestionTextInput';
import QuestionTextArea from './components/QuestionTextArea';
import QuestionCodeInput from './components/QuestionCodeInput';
import utpLogo from './assets/utp-logo.png';

function App() {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/background-images/image1.jpg',
    '/background-images/image2.jpeg',
    '/background-images/image3.jpeg',
    '/background-images/image4.jpeg',
    '/background-images/image5.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const questions = [
    {
      id: 'q1',
      component: (
        <QuestionSingleChoice
          question="¿Cuál es tu lenguaje de programación favorito?"
          options={['JavaScript', 'Python', 'C++']}
          onAnswer={(answer) => handleAnswer('q1', answer)}
        />
      ),
    },
    {
      id: 'q2',
      component: (
        <QuestionMultipleChoice
          question="¿Qué lenguajes de programación conoces?"
          options={['JavaScript', 'Python', 'C++', 'Java']}
          onAnswer={(answer) => handleAnswer('q2', answer)}
        />
      ),
    },
    {
      id: 'q3',
      component: (
        <QuestionTextInput
          question="Describe brevemente tu experiencia con la programación. Puedes incluir tablas, imágenes o cualquier formato de texto."
          onAnswer={(answer) => handleAnswer('q3', answer)}
        />
      ),
    },
    {
      id: 'q4',
      component: (
        <QuestionTextArea
          question="Describe un proyecto de programación en el que hayas trabajado."
          onAnswer={(answer) => handleAnswer('q4', answer)}
        />
      ),
    },
    {
      id: 'q5',
      component: (
        <QuestionCodeInput
          question="Escribe un fragmento de código que calcule la suma de dos números."
          onAnswer={(answer) => handleAnswer('q5', answer)}
        />
      ),
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="App">
      <div
        className="background"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>

      <header className="header">
        <div className="header-logo">
          <img src={utpLogo} alt="Logo UTP" />
        </div>
        <h2>PROGRAMA XPEDITION TRAINEE - PRUEBA TÉCNICA</h2>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Inicio</a></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h1 className="evaluacion-titulo">EVALUACIÓN ONLINE - 2024</h1>
        
        <div className="questions">
          <div className="question-box">
            {questions[currentQuestionIndex].component}
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
            Anterior
          </button>
          <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
            Siguiente
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Universidad Tecnológica del Perú - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;