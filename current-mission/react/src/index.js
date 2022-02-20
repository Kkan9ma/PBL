import CarltonNote from './CarltonNote';
import { $ } from './lib/dom';
import './styles.css';

new CarltonNote({
  $target: $('#root'),
  commandsList: {
    text: ['bold', 'italic', 'underline', 'strikethrough'],
    media: ['fontColor', 'uploadImage'],
  },
});
