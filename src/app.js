'use strict';

document.addEventListener('DOMContentLoaded', main);
const $ = (selector, scope = document) => scope.querySelector(selector);

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

function init() {
  $('#app').innerHTML = returnSpinboxHTMLTemplate();
  $('#app').insertAdjacentHTML('beforeend', returnAddSpinboxButtonTemplate());
}

function main() {
  init();
}
