import React from 'react';
import CarltonNote from './CarltonNote';

function App() {
  const commandsList = {
    text: ['bold', 'italic', 'underline', 'strikethrough'],
    media: ['fontColor', 'uploadImage'],
  }
  return <CarltonNote commandsList={commandsList} />;
}

export default App;
