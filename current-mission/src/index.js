import CarltonNote from './CarltonNote';

new CarltonNote({
  $target: document.querySelector('#root'),
  commandsList: {
    text: ['bold', 'italic', 'underline', 'strikethrough'],
    media: ['fontColor',],
  },
});
