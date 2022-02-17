import { $ } from "./dom";

export function toggleFontColorPaletteDisplay() {
  const palette = $('.note-font-color-palette');

  if (palette.style.display === 'block') {
    palette.style.display = 'none';

    return;
  }
  palette.style.display = 'block';
}