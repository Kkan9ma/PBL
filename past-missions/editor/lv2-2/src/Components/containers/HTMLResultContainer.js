import React from 'react';
import { StyledContentContainer } from './style';

function HTMLResultContainer({ HTMLResult }) {
  return (
    <div>
      <h3>HTML Result</h3>
      <StyledContentContainer>
        <div>{HTMLResult}</div>
      </StyledContentContainer>
    </div>
  );
}

export default HTMLResultContainer;
