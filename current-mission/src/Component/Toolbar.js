import React from 'react';
import CommandsButtonList from './CommandsButtonList';

function Toolbar({ commandsList }) {
  return (
    <>
      <ul className="editor__toolbar" style={{ margin: '0', padding: '0' }}>
        <CommandsButtonList commandsList={commandsList} />
      </ul>
    </>
  );
}

export default Toolbar;
