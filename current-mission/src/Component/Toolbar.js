import React from 'react';
import ButtonList from './ButtonList';

function Toolbar() {
  const commands = [
    {
      command: 'bold',
      text: '진하게',
    },
    {
      command: 'italic',
      text: '기울임',
    },
    {
      command: 'underline',
      text: '밑줄',
    },
    {
      command: 'strikethrough',
      text: '취소선',
    },
  ];

  return (
    <>
      <ul className="editor__toolbar" style={{ margin: '0', padding: '0' }}>
        <ButtonList commands={commands} />
      </ul>
    </>
  );
}

export default Toolbar;
