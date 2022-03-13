import React from 'react';
import { StyledWidget } from './Widget.styles';

function LinkWidget({type}) {
  return (
    <div>
      <span style={{color: 'white'}}>
        {type} widget
      </span>
    </div>
  )
}

function Widget({selectOption}) {
  const link = '링크';
  const audio = '오디오';
  return (
    <StyledWidget>
      <div>
        {selectOption === 'link' && <LinkWidget type={link} />}
        {selectOption === 'audio' && <LinkWidget type={audio} />}
      </div>
    </StyledWidget>
  )
}

export default Widget;
