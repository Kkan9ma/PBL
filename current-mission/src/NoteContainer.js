import ToolbarArea from "./ToolbarArea";

export default function NoteContainer({ $target, commandsList }) {
  const $noteContainer = document.createElement('div');

  $noteContainer.id = 'note-container';

  this.target = $target;
  this.target.appendChild($noteContainer);
  this.commandsList = commandsList;

  this.toolbar = new ToolbarArea({
    $target: $noteContainer,
    commandsList: this.commandsList,
  })

  this.render = () => {
    this.toolbar.render();
  };
}
