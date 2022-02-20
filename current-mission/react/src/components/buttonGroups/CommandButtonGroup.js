import '@fortawesome/fontawesome-free/js/all.js';
import { $, $create, on } from '../../lib/dom';
import { commandButtonIcons } from '../../settings';

export default function CommandButtonGroup({ $target, commandsList, action, executeTextCommand }) {
  const $buttonGroup = $create('ul');

  $buttonGroup.className = `note-button-group ${action}`;
  this.target = $target;
  this.commandsList = commandsList;

  this.render = () => {
    $buttonGroup.innerHTML = `
      ${this.commandsList ? this.commandsList
        .map(
          (command) => `
            <li class='note-button-container'>
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
        .join('') : ''}
    `;
    this.target.appendChild($buttonGroup);
  };

  this.handleClick = (event) => {
    if (event.target.tagName === 'UL') {
      return;
    }

    const { target } = event;
    const button = target.closest('button') ?? $('button', target);
    const { actionType } = button.dataset;
    const { command } = button.dataset;

    if (actionType === 'text-command') {
      executeTextCommand(command);
    }
  };


  this.bindEvents = () => {
    on($buttonGroup, 'click', this.handleClick);
  };

  this.render();
  this.bindEvents();
}
