import '@fortawesome/fontawesome-free/js/all.js';
import { commandButtonIcons } from '../../settings';

const styles = {
  listStyle: 'none',
  margin: '0 20px 0 0 ',
  padding: '0',
  userSelect: 'none'
};

export default function CommandButtonGroup({ $target, commandsList, action, executeTextCommand }) {
  const $buttonGroup = document.createElement('ul');
  $buttonGroup.className = `note-button-group ${action}`;
  this.target = $target;
  this.commandsList = commandsList;

  for (const style in styles) {
    $buttonGroup.style[style] = styles[style];
  }

  this.render = () => {
    $buttonGroup.innerHTML = `
      ${this.commandsList ? this.commandsList
        .map(
          (command) => `
            <li class='note-button-container' style='display: inline-block'>
              <button 
                class='note-command-button'
                data-command=${command}
                data-action-type=${action}
                style='
                  border-width: 1px; 
                  border-radius: 2px;
                  padding: 6px 9px;
                  border-color: #ccc;
                  background-color: #fff
                '
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
    const button = target.closest('button') ?? target.querySelector('button');
    const { actionType } = button.dataset;
    const { command } = button.dataset;

    if (actionType === 'text-command') {
      executeTextCommand(command);
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
