export default function NoteContainer({ $target }) {
  const $noteContainer = document.createElement('div');

  $noteContainer.id = 'note-container';

  this.target = $target;
  this.target.appendChild($noteContainer);

  this.render = () => {
    $noteContainer.innerText = 'noteContainer'
  };
}
