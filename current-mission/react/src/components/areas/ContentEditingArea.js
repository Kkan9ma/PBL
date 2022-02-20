import React from 'react';
import styled from 'styled-components';

const ContentEditableComponent = styled.div`
  height: 1000px;
  border: 1px solid rgba(0,0,0,0.3);
  overflow-y: auto;
  padding: 7px;

  &:focus {
    outline: none;
  }
`;

function ContentEditingArea() {
  return (
    <ContentEditableComponent className="carlton-content-editing-area" contentEditable={true} suppressContentEditableWarning={true}>
      contentEditable
    </ContentEditableComponent>
  )
}

export default ContentEditingArea;