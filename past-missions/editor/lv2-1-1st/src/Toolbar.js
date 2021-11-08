export default function Toolbar($target) {
  const $ul = document.createElement('ul');
  $ul.id = 'editor__toolbar';

  this.render = () => {
    $ul.innerHTML = `
      <li class="editor__button-container">
        <button type="button" class="editor__button" data-command="bold">진하게</button>
      </li>
      <li class="editor__button-container">
        <button type="button" class="editor__button" data-command="italic">기울임</button>
      </li>
      <li class="editor__button-container">
        <button type="button" class="editor__button" data-command="underline">밑줄</button>
      </li>
      <li class="editor__button-container">
        <button type="button" class="editor__button" data-command="strikethrough">취소선</button>
      </li>
    `;

    $target.appendChild($ul);
  };

  this.render();
}
