import ContentContainer from './ContentContainer.js';
import Toolbar from './Toolbar.js';
import './styles/styles.css';

export default function App($target) {
  const $div = document.createElement('div');
  $div.id = 'editor';

  this.state = [];
  this.render = () => {
    new Toolbar($div);
    new ContentContainer($div);

    $target.appendChild($div);
  };

  this.render();
}
