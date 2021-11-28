import React from 'react';
import styled from 'styled-components';
import { adjustImageTagSize } from '../utils/handleTagElement';

const StyledContentContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const handleClick = (e) => {
  const { target } = e;

  if (target.tagName === 'IMG') {
    adjustImageTagSize(target);
  }
};

function ContentContainer({ handleKeyup }, ref) {
  return (
    <StyledContentContainer
      ref={ref}
      className="editor__content-container"
      contentEditable="true"
      onKeyUp={handleKeyup}
      onClick={handleClick}
    ></StyledContentContainer>
  );
}

export default React.forwardRef(ContentContainer);
