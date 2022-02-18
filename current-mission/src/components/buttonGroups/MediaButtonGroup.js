import '@fortawesome/fontawesome-free/js/all.js';
import HiddenImageInput from '../HiddenImageInput';
import ColorPalette from '../ColorPalette';
import { toggleFontColorPaletteDisplay } from '../../lib/utils';
import { commandButtonIcons, fontColorMap } from '../../settings';
import { $ } from '../../lib/dom';

export default function MediaButtonGroup({ $target, commandsList, action, executeTextCommand }) {
  const $buttonGroup = document.createElement('ul');

  $buttonGroup.className = `note-button-group ${action}`;
  this.target = $target;
  this.commandsList = commandsList;

  this.colorPalette = new ColorPalette({
    $target: $buttonGroup,
    fontColorMap: fontColorMap
  })

  this.hiddenImageInput = new HiddenImageInput({
    $target: $buttonGroup
  });

  this.render = () => {
    $buttonGroup.innerHTML = `
        ${this.commandsList ? this.commandsList
        .map(
          (command) => `
              <li class='note-button-container ${command}'>
                <button 
                  class='note-command-button'
                  data-command=${command}
                  data-action-type=${action}
                >
                  ${commandButtonIcons[command]}
                </button>
              </li>
            `
        )
        .join('') : ''
      }
    `;
    this.target.appendChild($buttonGroup);
    this.colorPalette.render();
    this.hiddenImageInput.render();
  };

  this.handleClickFontColor = () => {
    toggleFontColorPaletteDisplay();
  }

  this.handleClickImageUpload = (event) => {
    const mediaCommandContainer = event.target.closest('ul');
    const hiddenInput = $('input', mediaCommandContainer);

    hiddenInput.click();
  }

  this.handleClick = (event) => {
    if (event.target.tagName === 'UL') {
      return;
    }

    const { target } = event;
    const button = target.closest('button') ?? target.querySelector('button');
    const { command } = button.dataset;

    if (command === 'fontColor') {
      this.handleClickFontColor(event);
    }
    if (command === 'uploadImage') {
      this.handleClickImageUpload(event);
    }
  };


  this.bindEvents = () => {
    $buttonGroup.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  };

  this.render();
  this.bindEvents();
}
