'use strict';

import {$, $$, on} from './helpers.js';
import {returnSpinboxHTMLTemplate, returnAddSpinboxButtonHTMLTemplate} from './templates.js';

document.addEventListener('DOMContentLoaded', main);

let isPressed = false;
let counter = 1000;

document.addEventListener('mouseup', () => {
  isPressed = false;
  counter = 1000;
});

function onMouseUpAddNumberButton() {
  isPressed = false;
  counter = 1000;
}

function onMouseUpSubstractNumberButton() {
  isPressed = false;
  counter = 1000;
}

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

function onMouseDownAddNumberButton(event) {
  const {target} = event;
  const $spinbox = target.closest('.spinbox');
  const $input = $('input', $spinbox);

  isPressed = true;
  changeValue(1, $input);
}

function onMouseDownSubstractNumberButton(event) {
  const {target} = event;
  const $spinbox = target.closest('.spinbox');
  const $input = $('input', $spinbox);

  isPressed = true;
  changeValue(-1, $input);
}

function onClickDeleteSpinboxButton(event) {
  const {target} = event;
  const $spinbox = target.closest('.spinbox-board');

  $spinbox.remove();
}

function calcLastSpinboxIndex() {
  return $$('.spinbox-board').length - 1;
}

function getLastSpinbox() {
  return $$('.spinbox-board')[calcLastSpinboxIndex()];
}

function onClickAddSpinboxButton() {
  let lastSpinbox = getLastSpinbox();

  if (lastSpinbox) {
    lastSpinbox.insertAdjacentHTML('afterend', returnSpinboxHTMLTemplate());
    lastSpinbox = getLastSpinbox();
    on($('.add-number-button', lastSpinbox), 'mouseup', onMouseUpAddNumberButton);
    on($('.add-number-button', lastSpinbox), 'mousedown', onMouseDownAddNumberButton);
    on($('.add-number-button', lastSpinbox), 'mouseleave', () => {
      isPressed = false;
      counter = 1000;
    });
    on($('.substract-number-button', lastSpinbox), 'mouseup', onMouseUpSubstractNumberButton);
    on($('.substract-number-button', lastSpinbox), 'mousedown', onMouseDownSubstractNumberButton);
    on($('.substract-number-button', lastSpinbox), 'mouseleave', () => {
      isPressed = false;
      counter = 1000;
    });
    on($('.delete-spinbox-button', lastSpinbox), 'click', onClickDeleteSpinboxButton);
  } else {
    init();
    addEvents();
  }
}

function addEvents() {
  $$('.spinbox-board').forEach(spinbox => {
    on($('.add-number-button', spinbox), 'mouseup', onMouseUpAddNumberButton);
    on($('.add-number-button', spinbox), 'mousedown', onMouseDownAddNumberButton);
    on($('.substract-number-button', spinbox), 'mouseup', onMouseUpSubstractNumberButton);
    on($('.substract-number-button', spinbox), 'mousedown', onMouseDownSubstractNumberButton);
    on($('.add-number-button', spinbox), 'mouseleave', () => {
      isPressed = false;
      counter = 1000;
    });
    on($('.substract-number-button', spinbox), 'mouseleave', () => {
      isPressed = false;
      counter = 1000;
    });
    on($('.delete-spinbox-button', spinbox), 'click', onClickDeleteSpinboxButton);
  });
  on($('#add-spinbox-button'), 'click', onClickAddSpinboxButton);
}

function init() {
  $('#app').innerHTML = returnSpinboxHTMLTemplate();
  $('#app').insertAdjacentHTML('beforeend', returnAddSpinboxButtonHTMLTemplate());
}

function main() {
  init();
  addEvents();
}
