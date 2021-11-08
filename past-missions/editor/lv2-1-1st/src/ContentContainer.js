export default function ContentContainer($target) {
  const $div = document.createElement('div');

  $div.id = 'editor__contentContainer';
  $div.setAttribute('contentEditable', true);

  this.render = () => {
    $target.appendChild($div);
  };
  this.render();
}
