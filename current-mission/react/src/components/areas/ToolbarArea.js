import CommandButtonGroup from '../buttonGroups/CommandButtonGroup';
import React from 'react';

function ToolbarArea({ commandsList }) {
  const commands = commandsList;

  return (
    <div className='note-toolbar'>
      <CommandButtonGroup commandsList={commands.text} action='text-command' />
      <CommandButtonGroup commandsList={commands.media} action='media-command' isColorPalette={true} isHiddenInput={true} />
    </div>
  )
}

export default ToolbarArea;
