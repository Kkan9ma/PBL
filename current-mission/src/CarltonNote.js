import NoteContainer from "./components/NoteContainer";

function CarltonNote({ $target, commandsList }) {
  const $carltonNote = document.createElement('section');

  $carltonNote.id = 'carlton-note';

  this.$target = $target;
  this.$target.appendChild($carltonNote);
  this.state = {
    commandsList: !commandsList ? [] : commandsList,
  };

  this.noteContainer = new NoteContainer({
    $target: $carltonNote,
    commandsList: this.state.commandsList
  });

  this.init = () => {
    this.state.commandsList = commandsList;
  }

  this.init();
}

export default CarltonNote;
