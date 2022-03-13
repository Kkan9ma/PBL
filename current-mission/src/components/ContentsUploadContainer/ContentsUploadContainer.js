import React from 'react';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import PhotoInfoContainer from '../PhotoInfoContainer/PhotoInfoContainer';
import StyledContentsUploadContainer from './ContentsUploadContainer.styles';

function ContentsUploadContainer({selectOption, isWidget, onUploadImage, onDeleteImage}) {
  return (
    <StyledContentsUploadContainer>
      <PhotoContainer selectOption={selectOption} isWidget={isWidget} onUploadImage={onUploadImage} onDeleteImage={onDeleteImage} />
      <PhotoInfoContainer />
    </StyledContentsUploadContainer>
  )
}

export default ContentsUploadContainer;
