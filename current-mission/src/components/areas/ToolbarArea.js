import CommandButtonGroup from '../buttonGroups/CommandButtonGroup';
import MediaButtonGroup from '../buttonGroups/MediaButtonGroup';

export default function ToolbarArea({
  $target,
  commandsList,
  executeTextCommand,
}) {
  const $toolbarArea = document.createElement('div');

  $toolbarArea.className = 'note-toolbar';

  this.target = $target;
  this.commandsList = commandsList;
  this.target.appendChild($toolbarArea);

  this.textCommandButtonGroup = new CommandButtonGroup({
    $target: $toolbarArea,
    commandsList: this.commandsList['text'],
    action: 'text-command',
    executeTextCommand,
  });

  this.mediaButtonGroup = new MediaButtonGroup({
    $target: $toolbarArea,
    commandsList: this.commandsList['media'],
    action: 'media-command',
    executeTextCommand,
  });
}
