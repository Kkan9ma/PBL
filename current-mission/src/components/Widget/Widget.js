import React from 'react';
import { StyledWidget } from './Widget.styles';

function AssetWidget({type}) {
  return (
    <>
      {type === 'link' && <img alt="link" src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png" />}
      {type === 'audio' && <img alt="audio" src="https://img.icons8.com/ios-glyphs/50/000000/high-volume--v1.png" />}
    </>
  )
}
function Widget({selectOption}) {
  const condition = {
    link: 'link',
    audio: 'audio'
  }

  return (
    <StyledWidget>
      <AssetWidget type={condition[selectOption]} />
    </StyledWidget>
  )
}

export default Widget;
