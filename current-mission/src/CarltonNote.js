import NoteContainer from "./NoteContainer";

function CarltonNote({ $target }) {
  const $carltonNote = document.createElement('section');

  $carltonNote.id = 'carlton-note';

  this.$target = $target;
  this.$target.appendChild($carltonNote);
  $carltonNote.innerText = 'carltonNote';

  this.noteContainer = new NoteContainer({ $target: $carltonNote });

  this.render = () => {
    this.noteContainer.render();
  }

  this.init = () => {
    this.render();
  }

  this.init();
}

export default CarltonNote;
