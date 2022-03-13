import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import PhotoInfoContainer from '../PhotoInfoContainer/PhotoInfoContainer';
import StyledContentsUploadContainer from './ContentsUploadContainer.styles';

function ContentsUploadContainer() {
  return (
    <StyledContentsUploadContainer>
      <PhotoContainer />
      <PhotoInfoContainer />
    </StyledContentsUploadContainer>
  )
}

export default ContentsUploadContainer;
