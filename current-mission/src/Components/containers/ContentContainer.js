import React from 'react';
import { StyledContentContainer } from './style';

function ContentContainer({ handleKeyup }, ref) {
  return (
    <div>
      <h3>Editing Area</h3>
      <StyledContentContainer
        ref={ref}
        className="editor__content-container"
        contentEditable="true"
        onKeyUp={handleKeyup}
      ></StyledContentContainer>
    </div>
  );
}

export default React.forwardRef(ContentContainer);
