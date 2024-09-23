import React from 'react';

const QuestionTextArea = ({ question, onAnswer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <textarea
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Escribe tu respuesta aquí..."
      />
    </div>
  );
};

export default QuestionTextArea;