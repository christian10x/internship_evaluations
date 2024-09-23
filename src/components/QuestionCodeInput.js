import React from 'react';

const QuestionCodeInput = ({ question, onAnswer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <textarea
        onChange={(e) => onAnswer(e.target.value)}
        placeholder="Escribe tu código aquí..."
        style={{ fontFamily: 'monospace', width: '100%', height: '200px' }}
      />
    </div>
  );
};

export default QuestionCodeInput;