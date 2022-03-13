import React from 'react';
import { StyledWidget } from './Widget.styles';

function Widget({selectOption}) {
  return (
    <StyledWidget>
      <span>
        {selectOption === 'link' && '링크'}
        {selectOption === 'audio' && '오디오'}
      </span>
    </StyledWidget>
  )
}

export default Widget;
