export default function ContentContainer($target) {
  const $div = document.createElement('div');

  $div.id = 'editor__contentContainer';
  $div.setAttribute('contentEditable', true);

  this.render = () => {
    $div.innerHTML = `콘텐츠 입력`;
    $target.appendChild($div);
  };
  this.render();
}
