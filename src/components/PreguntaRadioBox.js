import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import '../styles/PreguntaRadioBox.css';

const PreguntaRadioBox = ({ pregunta, opciones, onChange, value }) => {
  const [selectedOption, setSelectedOption] = useState(value || '');

  const sanitize = (text) => DOMPurify.sanitize(text);

  const handleRadioChange = (e) => {
    const option = sanitize(e.target.value);
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className='ContainerRadioBox'>
      <h3>{sanitize(pregunta)}</h3>
      {opciones.map((opcion, index) => (
        <div key={index}>
          <input
            type="radio"
            name={sanitize(pregunta)}
            value={sanitize(opcion)}
            onChange={handleRadioChange}
            checked={selectedOption === sanitize(opcion)}
          />
          {sanitize(opcion)}
        </div>
      ))}
    </div>
  );
};

export default PreguntaRadioBox;