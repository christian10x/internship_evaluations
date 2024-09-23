import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import '../styles/PreguntaTextBoxNoFormat.css';

const PreguntaTextBoxNoFormat = ({ pregunta, onChange, value }) => {
  const [respuesta, setRespuesta] = useState(value || '');

  const handleChange = (e) => {
    const rawInput = e.target.value;
    setRespuesta(rawInput);
    const clean = DOMPurify.sanitize(rawInput);
    onChange(clean);
  };

  return (
    <div className='ContainerTextBox'>
      <h3>{pregunta}</h3>
      <textarea 
        className='textareaTextBox'
        value={respuesta}
        onChange={handleChange}
        rows="10"
        placeholder="Ingresa tu respuesta aquí"
      />
    </div>
  );
};

export default PreguntaTextBoxNoFormat;
