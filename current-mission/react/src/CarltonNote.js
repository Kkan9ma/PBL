import React from "react";
import NoteContainer from "./components/NoteContainer";

function CarltonNote({ commandsList }) {
  return (
    <>
      <section className="calrton-note" >
        <NoteContainer commandsList={commandsList} />
      </section>
    </>
  )
}

export default CarltonNote;
