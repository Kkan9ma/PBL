import { $, $create, on } from "../lib/dom";
import { imageFileTypes } from "../settings";
import { createImageElement, validImageFileType } from "../lib/utils";

export default function HiddenImageInput({ $target }) {
  const $hiddenImageInput = $create('input');

  $hiddenImageInput.type = 'file';
  $hiddenImageInput.accept = imageFileTypes.join(', ');

  this.target = $target;

  this.onUploadImage = (event) => {
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

  this.render = () => {
    this.target.append($hiddenImageInput);
  }

  this.bindEvents = () => {
    on($hiddenImageInput, 'click', (event) => { event.stopPropagation(); });
    on($hiddenImageInput, 'change', this.onUploadImage);
  }
  this.bindEvents();
}
