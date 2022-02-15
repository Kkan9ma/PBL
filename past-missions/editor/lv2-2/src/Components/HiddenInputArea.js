import React from 'react';
import styled from 'styled-components';

const StyledHiddenInputArea = styled.input`
  display: none;
`;

function HiddenInputArea({ onChange }, ref) {
  return (
    <div>
      <StyledHiddenInputArea
        type="file"
        id="image_uploads"
        name="image_uploads"
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
        ref={ref}
      ></StyledHiddenInputArea>
    </div>
  );
}

export default React.forwardRef(HiddenInputArea);
