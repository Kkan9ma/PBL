export default function App($target) {
  const $div = document.createElement('div');
  $div.id = 'editor';

  this.state = [];
  this.render = () => {
    $target.appendChild($div);
  };

  this.render();
}
