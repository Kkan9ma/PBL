import ContentEditingArea from './areas/ContentEditingArea';
import ToolbarArea from './areas/ToolbarArea';
import { executeTextCommand } from '../editing/executeTextCommand';


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
}
