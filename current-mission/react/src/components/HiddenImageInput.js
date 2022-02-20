import React from 'react';
import { $ } from '../lib/dom';
import { createImageElement, validImageFileType } from '../lib/utils';
import { imageFileTypes } from '../settings';

export default function HiddenImageInput() {
  const onUploadImage = (event) => {
    const file = event.target.files[0];

    if (!validImageFileType(file)) {
      alert('올바른 형식의 파일이 아닙니다.');
      return;
    }

    const image = createImageElement(file);
    const selection = window.getSelection();

    if (!selection.anchorNode) { // If it had no selection, add image at last section of editing area.
      $('.carlton-content-editing-area').append(image);
      return;
    }
    selection.getRangeAt(0).insertNode(image);
  }

  return (
    <input type="file" style={{ display: "none" }} accept={imageFileTypes.join(', ')}
      onClick={(event) => {
        event.stopPropagation();
      }}
      onChange={onUploadImage}
    />
  )
}
