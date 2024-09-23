import React from 'react';

const QuestionSingleChoice = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="singleChoice"
            value={option}
            onChange={(e) => onAnswer(e.target.value)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default QuestionSingleChoice;