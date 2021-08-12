'use strict';

import { $, $$, on } from './helpers.js';
import {
  returnSpinboxHTMLTemplate,
  returnAddSpinboxButtonHTMLTemplate,
} from './templates.js';

document.addEventListener('DOMContentLoaded', main);

let isPressed = false;
let counter = 1000;

function changeValue(action, $input) {
  if (!isPressed) {
    return;
  }
  if (counter > 35) {
    counter /= 1.1;
  }
  $input.value = parseInt($input.value, 10) + parseInt(action, 10);
  setTimeout(() => {
    changeValue(action, $input);
  }, counter);
}

function handleMouseup(event) {
  const { target } = event;

  if (target.classList.contains('spinbox__button')) {
    isPressed = false;
    counter = 1000;
  }
}

function handleMouseLeave(event) {
  const { target } = event;

  if (target.classList.contains('spinbox__button')) {
    isPressed = false;
    counter = 1000;
  }
}

function handleMousedown(event) {
  const { target } = event;

  if (target.classList.contains('spinbox__button')) {
    const $spinbox = target.closest('.spinbox');
    const $input = $('input', $spinbox);

    if (target.classList.contains('add')) {
      isPressed = true;
      changeValue(1, $input);
    } else if (target.classList.contains('substract')) {
      isPressed = true;
      changeValue(-1, $input);
    }
  }
}

function deleteSpinbox(target) {
  const $spinbox = target.closest('.spinbox');

  $spinbox.remove();
}

function handleClick(event) {
  const { target } = event;

  if (target.id === 'add-spinbox-button') {
    addSpinbox();
  } else if (target.className === 'spinbox__button delete') {
    deleteSpinbox(target);
  }
}

function calcLastSpinboxIndex() {
  return $$('.spinbox').length - 1;
}

function getLastSpinbox() {
  return $$('.spinbox')[calcLastSpinboxIndex()];
}

function addSpinbox() {
  const lastSpinbox = getLastSpinbox();

  if (lastSpinbox) {
    lastSpinbox.insertAdjacentHTML('afterend', returnSpinboxHTMLTemplate());
    return;
  }
  $('#app').insertAdjacentHTML('afterbegin', returnSpinboxHTMLTemplate());
}

function addEvents() {
  on($('#app'), 'mouseup', handleMouseup);
  on($('#app'), 'mousedown', handleMousedown);
  on($('#app'), 'mouseleave', handleMouseLeave);
  on($('#app'), 'click', handleClick);
}

function init() {
  $('#app').insertAdjacentHTML('beforeend', returnSpinboxHTMLTemplate());
  $('#app').insertAdjacentHTML(
    'beforeend',
    returnAddSpinboxButtonHTMLTemplate()
  );
}

function main() {
  init();
  addEvents();
}
