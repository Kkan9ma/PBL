import React from 'react';
import NoteContainer from './components/NoteContainer';

function CarltonNote({ commandsList }) {
  return (
      <section className="carlton-note">
        <NoteContainer commandsList={commandsList} />
      </section>
  );
}

export default CarltonNote;
