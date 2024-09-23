import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import DOMPurify from 'dompurify';
import '../styles/PreguntaTextBoxNoFormat.css';

const PreguntaTextBox = ({ pregunta, onChange, value }) => {
  const [respuesta, setRespuesta] = useState(value || '');

  // Configuración de las herramientas del editor
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike'], 
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'], // Botones de enlace e imagen
      ['clean'] // Botón de limpiar
    ],
  };

  const handleChange = (content) => {
    const cleanContent = DOMPurify.sanitize(content);
    setRespuesta(cleanContent);
    onChange(cleanContent); //reporta el contenido
  };


  const isFieldEmpty = () => {
    const cleanContent = DOMPurify.sanitize(respuesta);
    return cleanContent.trim().length === 0;
  };

  return (
    <div className='ContainerTextBox'>
      <h3>{pregunta}</h3>
      <ReactQuill
        value={respuesta}
        onChange={handleChange}
        modules={modules}
        placeholder='Escriba su respuesta'
      />
      {isFieldEmpty()}
    </div>
  );
};

export default PreguntaTextBox;
