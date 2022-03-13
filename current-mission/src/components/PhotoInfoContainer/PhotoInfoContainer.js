import React from 'react';
import { StyledPhotoInfoContainer } from './PhotoInfoContainer.styles';

function PhotoInfoContainer() {
  return (
    <StyledPhotoInfoContainer>
      <label htmlFor="editor-title-input">
        제목
        <input id="editor-title-input" name="title-input" placeholder="작성하실 글의 제목을 적어주세요." />
      </label>
      <div>
          <textarea placeholder="사진에 대한 설명을 적어주세요."/>
      </div>
    </StyledPhotoInfoContainer>
  )
}

export default PhotoInfoContainer;
