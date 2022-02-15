import ContentEditingArea from "./ContentEditingArea";
import ToolbarArea from "./ToolbarArea";

const styles = {
  minWidth: '300px',
};

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

  this.contentEditingArea = new ContentEditingArea({
    $target: $noteContainer,
    commandsList,
  });

  for (const style in styles) {
    $noteContainer.style[style] = styles[style];
  }

  this.render = () => {
    this.toolbar.render();
  };
}
