export function returnSpinboxHTMLTemplate() {
  return `
      <div class='spinbox'>
        <input type='number' value='0' />
        <button class='spinbox__button add'>
          +
        </button>
        <button class='spinbox__button substract'>
          -
        </button>
        <button class='spinbox__button delete'>
          스핀박스 삭제하기
        </button>
      </div>
  `;
}

export function returnAddSpinboxButtonHTMLTemplate() {
  return `
    <button id='add-spinbox-button'>스핀박스 레이아웃 추가하기</button>
  `;
}
