import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichText({ onChange }) {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (content) => {
    setEditorHtml(content);
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <div className="freely-text-editor">
      <ReactQuill
      value={editorHtml}
      onChange={handleEditorChange}
      modules={{
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
          [{ 'align': [] }],
          [{ 'color': [] }, { 'background': [] }],
          ['clean']
        ],
      }}
    />
  </div> 
  );
}

export default RichText;
