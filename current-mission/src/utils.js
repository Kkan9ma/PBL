import { $ } from "./dom";
import { imageFileTypes } from "./settings";

export function toggleFontColorPaletteDisplay() {
  const palette = $('.note-font-color-palette');

  if (palette.style.display === 'block') {
    palette.style.display = 'none';

    return;
  }
  palette.style.display = 'block';
}

export function validImageFileType(file) {
  return imageFileTypes.includes(file.type);
}

export function createImageElement(file) {
  const image = document.createElement('img');

  image.src = URL.createObjectURL(file);

  return image;
}
