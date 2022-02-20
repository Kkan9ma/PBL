import React, { useRef } from "react";
import NoteContainer from "./components/NoteContainer";

function CarltonNote({ commandsList }) {
  return (
    <>
      <section className="calrton-note" ref={carltonSectionRef}>
        <NoteContainer commandsList={commandsList} />
      </section>
    </>
  )
}

export default CarltonNote;
