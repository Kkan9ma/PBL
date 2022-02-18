import ContentEditingArea from "../components/areas/ContentEditingArea";
import ToolbarArea from "../components/areas/ToolbarArea";
import { executeTextCommand } from "../editing/executeTextCommand";

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
    executeTextCommand,
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
