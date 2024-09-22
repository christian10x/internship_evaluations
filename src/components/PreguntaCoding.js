import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import '../styles/PreguntaCoding.css';

const PreguntaCoding = ({ pregunta, onChange, value }) => {
  const [codigo, setCodigo] = useState(value || ''); // Initialize with the passed value

  const handleChange = (e) => {
    const rawInput = e.target.value;
    setCodigo(rawInput);
    const clean = DOMPurify.sanitize(rawInput);
    onChange(clean); 
  };

  return (
    <div className='ContainerCoding'>
      <h3>{pregunta}</h3>
      <textarea
        className='textareaCoding'
        value={codigo}
        onChange={handleChange}
        rows="10"
        placeholder="Ingresa tu código aquí"
      />
    </div>
  );
};

export default PreguntaCoding;
