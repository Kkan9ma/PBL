import { $, $$, on } from './helpers.js';
import { returnSpinboxHTMLTemplate } from './templates.js';

export class Handlers {
  constructor() {
    this.isMousedown = false;
    this.delay = 1000;
    this.bindEvents();
  }

  bindEvents() {
    this.changeValue = this.changeValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseup = this.handleMouseup.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(event) {
    const { target } = event;

    if (target.id === 'add-spinbox-button') {
      this.addSpinbox();
      on(
        $$('.spinbox__button', this.getLastSpinbox()),
        'mouseleave',
        this.handleMouseLeave
      );
    } else if (target.className === 'spinbox__button delete') {
      this.deleteSpinbox(target);
    }
  }

  changeValue(action, $input) {
    if (!this.isMousedown) {
      return;
    }
    if (this.delay > 35) {
      this.delay /= 1.1;
    }
    $input.value = parseInt($input.value, 10) + parseInt(action, 10);
    setTimeout(() => {
      this.changeValue(action, $input);
    }, this.delay);
  }

  handleMouseup(event) {
    const { target } = event;

    if (target.classList.contains('spinbox__button')) {
      this.isMousedown = false;
      this.delay = 1000;
    }
  }

  handleMouseLeave(event) {
    const { target } = event;
    if (target.classList.contains('spinbox__button')) {
      this.isMousedown = false;
      this.delay = 1000;
    }
  }

  handleMousedown(event) {
    const { target } = event;

    if (target.classList.contains('spinbox__button')) {
      const $spinbox = target.closest('.spinbox');
      const $input = $('input', $spinbox);

      if (target.classList.contains('add')) {
        this.isMousedown = true;
        this.changeValue(1, $input);
      } else if (target.classList.contains('substract')) {
        this.isMousedown = true;
        this.changeValue(-1, $input);
      }
    }
  }

  calcLastSpinboxIndex() {
    return $$('.spinbox').length - 1;
  }

  getLastSpinbox() {
    return $$('.spinbox')[this.calcLastSpinboxIndex()];
  }

  addSpinbox() {
    const lastSpinbox = this.getLastSpinbox();

    if (lastSpinbox) {
      lastSpinbox.insertAdjacentHTML('afterend', returnSpinboxHTMLTemplate());
    } else {
      $('#app').insertAdjacentHTML('afterbegin', returnSpinboxHTMLTemplate());
    }
  }

  deleteSpinbox(target) {
    const $spinbox = target.closest('.spinbox');

    $spinbox.remove();
  }
}
