import React from 'react';
import { StyledDisplayNoneInput } from './HiddenFileInput.styles';

function HiddenFileInput() {
  return (
    <StyledDisplayNoneInput type="file" // TODO: accept file type
      onClick={(event) => {event.stopPropagation();}}
      onChange={()=>{}} // onChange
    />
  )
}

export default HiddenFileInput;
