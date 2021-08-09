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
    <button class='add-spinbox-button'>스핀박스 추가하기</button>
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

function addEvents() {
  $$('.spinbox-board').forEach(spinbox => {
    on($('.add-number-button', spinbox), 'click', onClickAddNumberButton);
    on($('.substract-number-button', spinbox), 'click', onClickSubstractNumberButton);
  });
}

function init() {
  $('#app').innerHTML = returnSpinboxHTMLTemplate();
  $('#app').insertAdjacentHTML('beforeend', returnAddSpinboxButtonTemplate());
}

function main() {
  init();
  addEvents();
}
