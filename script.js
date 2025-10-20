const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  envelope.parentElement.classList.toggle('open');
});
