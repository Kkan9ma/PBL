import CarltonNote from './CarltonNote';
import './styles.css';

new CarltonNote({
  $target: document.querySelector('#root'),
  commandsList: {
    text: ['bold', 'italic', 'underline', 'strikethrough'],
    media: ['fontColor', 'uploadImage'],
  },
});
