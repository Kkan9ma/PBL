'use strict';

document.addEventListener('DOMContentLoaded', main);
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => scope.querySelectorAll(selector);
const on = (target, eventName, handler) => target.addEventListener(eventName, handler);

function returnSpinboxHTMLTemplate() {
  return `
    <div class='spinbox-board'>
      <div class='spinbox'>
        <input type='text' value='0' />
        <button class='add-number-button'>
          +
        </button>
        <button class='substract-number-button'>
          -
        </button>
        <button class='delete-spinbox-button'>
          스핀박스 삭제하기
        </button>
      </div>
    </div>
  `;
}

function returnAddSpinboxButtonTemplate() {
  return `
    <button id='add-spinbox-button'>스핀박스 레이아웃 추가하기</button>
  `;
}

function onClickAddNumberButton(event) {
  const {target} = event;
  const $spinbox = target.closest('.spinbox');
  const $input = $('input', $spinbox);

  $input.value = parseInt($input.value, 10) + 1;
}

function onClickSubstractNumberButton(event) {
  const {target} = event;
  const $spinbox = target.closest('.spinbox');
  const $input = $('input', $spinbox);

  $input.value = parseInt($input.value, 10) - 1;
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
    on($('.add-number-button', lastSpinbox), 'click', onClickAddNumberButton);
    on($('.substract-number-button', lastSpinbox), 'click', onClickSubstractNumberButton);
    on($('.delete-spinbox-button', lastSpinbox), 'click', onClickDeleteSpinboxButton);
  } else {
    init();
    addEvents();
  }
}

function addEvents() {
  $$('.spinbox-board').forEach(spinbox => {
    on($('.add-number-button', spinbox), 'click', onClickAddNumberButton);
    on($('.substract-number-button', spinbox), 'click', onClickSubstractNumberButton);
    on($('.delete-spinbox-button', spinbox), 'click', onClickDeleteSpinboxButton);
  });
  on($('#add-spinbox-button'), 'click', onClickAddSpinboxButton);
}

function init() {
  $('#app').innerHTML = returnSpinboxHTMLTemplate();
  $('#app').insertAdjacentHTML('beforeend', returnAddSpinboxButtonTemplate());
}

function main() {
  init();
  addEvents();
}
