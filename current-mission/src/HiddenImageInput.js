import { $ } from "./dom";
import { imageFileTypes } from "./settings";
import { createImageElement, validImageFileType } from "./utils";

function HiddenImageInput({ $target }) {
  const $hiddenImageInput = document.createElement('input');

  $hiddenImageInput.type = 'file';
  $hiddenImageInput.className = '';
  $hiddenImageInput.accept = imageFileTypes.join(', ');
  $hiddenImageInput.style.display = 'none';

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
    $hiddenImageInput.addEventListener('click', (event) => {
      event.stopPropagation();
    })
    $hiddenImageInput.addEventListener('change', (event) => {
      this.onUploadImage(event)
    })
  }
  this.render();
  this.bindEvents();
}

export default HiddenImageInput;
