import React from 'react';
import { StyledDisplayNoneInput } from './HiddenFileInput.styles';

function HiddenFileInput({onClick, onUpload}, ref) {
  return (
    <StyledDisplayNoneInput type="file"
      onClick={onClick}
      onChange={(event)=>{onUpload(event)}}
      ref={ref}
      className="hidden-file-input"
    />
  )
}

export default React.forwardRef(HiddenFileInput);
