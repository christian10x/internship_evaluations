import React, { useState } from 'react';

const QuestionMultipleChoice = ({ question, options, onAnswer }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (value) => {
    const updatedSelections = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedSelections);
    onAnswer(updatedSelections);
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            onChange={() => handleChange(option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default QuestionMultipleChoice;