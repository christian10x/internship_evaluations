import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa los estilos de React Quill

const QuestionTextInput = ({ question, onAnswer }) => {
  const [value, setValue] = useState('');

  const handleChange = (content) => {
    setValue(content);
    onAnswer(content);
  };

  return (
    <div className="question-text-input">
      <h3>{question}</h3>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }, { 'align': [] }],
            ['link', 'image', 'video'], // Permite insertar imágenes y videos
            ['clean'] // Elimina el formato
          ],
        }}
        formats={[
          'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'script', 'indent', 'link', 'image', 'video', 'align'
        ]}
        placeholder="Escribe tu respuesta aquí, incluyendo tablas, imágenes o cualquier formato de texto..."
      />
    </div>
  );
};

export default QuestionTextInput;