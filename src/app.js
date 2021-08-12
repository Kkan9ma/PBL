import { Handlers } from './Handlers.js';
import { $, on } from './helpers.js';
import {
  returnSpinboxHTMLTemplate,
  returnAddSpinboxButtonHTMLTemplate,
} from './templates.js';

class SpinboxApp {
  constructor() {
    this.handlers = new Handlers();
  }

  addEvents() {
    on($('#app'), 'click', this.handlers.handleClick);
    on($('#app'), 'mouseup', this.handlers.handleMouseup);
    on($('#app'), 'mousedown', this.handlers.handleMousedown);
    on($('#app'), 'mouseleave', this.handlers.handleMouseLeave);
  }

  init() {
    $('#app').insertAdjacentHTML('beforeend', returnSpinboxHTMLTemplate());
    $('#app').insertAdjacentHTML(
      'beforeend',
      returnAddSpinboxButtonHTMLTemplate()
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const spinboxApp = new SpinboxApp();

  spinboxApp.init();
  spinboxApp.addEvents();
});
