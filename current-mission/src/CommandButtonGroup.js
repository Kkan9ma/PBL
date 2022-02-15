import '@fortawesome/fontawesome-free/js/all.js';
import { icons } from './icons/commandButtons';

const styles = {
  listStyle: 'none',
  margin: '0 20px 0 0 ',
  padding: '0',
};

export default function CommandButtonGroup({ $target, commandsList, action }) {
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
                ${icons[command]}
              </button>
            </li>
          `
        )
        .join('') : ''}
    `;
    this.target.appendChild($buttonGroup);
  };

  this.render();
}
