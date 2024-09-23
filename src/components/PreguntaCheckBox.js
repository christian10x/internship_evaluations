import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import '../styles/PreguntaCheckBox.css';

const PreguntaCheckBox = ({ pregunta, opciones, onChange, value }) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);

  const sanitize = (text) => DOMPurify.sanitize(text);

  useEffect(() => {
    // Update local state if the value prop changes
    setSelectedOptions(value || []);
  }, [value]);

  const handleCheckboxChange = (e) => {
    const option = sanitize(e.target.value);
    const newSelections = e.target.checked
      ? [...selectedOptions, option]
      : selectedOptions.filter(item => item !== option);
    
    setSelectedOptions(newSelections);
    onChange(newSelections);
  };

  const isValid = selectedOptions.length > 0;

  return (
    <div className='ContainerCheckBox'>
      <h3>{sanitize(pregunta)}</h3>
      {opciones.map((opcion, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={sanitize(pregunta)}
            value={sanitize(opcion)}
            onChange={handleCheckboxChange}
            checked={selectedOptions.includes(sanitize(opcion))}
          />
          {sanitize(opcion)}
        </div>
      ))}
    </div>
  );
};

export default PreguntaCheckBox;
