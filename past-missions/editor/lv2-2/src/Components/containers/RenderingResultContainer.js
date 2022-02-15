import React from 'react';
import { StyledContentContainer } from './style';

function RenderingResultContainer({ HTMLResult }, ref) {
  return (
    <div>
      <h3>Result</h3>
      <StyledContentContainer>
        <div ref={ref}>{HTMLResult}</div>
      </StyledContentContainer>
    </div>
  );
}

export default React.forwardRef(RenderingResultContainer);
