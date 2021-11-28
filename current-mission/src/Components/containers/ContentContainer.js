import React from 'react';
import { adjustImageTagSize } from '../../utils/handleTagElement';
import { StyledContentContainer } from './style';

const handleClick = (e) => {
  const { target } = e;

  if (target.tagName === 'IMG') {
    adjustImageTagSize(target);
  }
};

function ContentContainer({ handleKeyup }, ref) {
  return (
    <div>
      <h3>Editing Area</h3>
      <StyledContentContainer
        ref={ref}
        className="editor__content-container"
        contentEditable="true"
        onKeyUp={handleKeyup}
        onClick={handleClick}
      ></StyledContentContainer>
    </div>
  );
}

export default React.forwardRef(ContentContainer);
