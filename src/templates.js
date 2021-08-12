export function returnSpinboxHTMLTemplate() {
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

export function returnAddSpinboxButtonHTMLTemplate() {
  return `
    <button id='add-spinbox-button'>스핀박스 레이아웃 추가하기</button>
  `;
}