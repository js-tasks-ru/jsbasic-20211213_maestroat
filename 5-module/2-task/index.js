function toggleText() {
  // ваш код...
  let buttonClick = document.body.querySelector('.toggle-text-button');
  let p = document.body.querySelector('#text');
  // let p = document.getElementById('text');
  buttonClick.onclick = function() {
    if (!p.hasAttribute('hidden')) p.hidden = true;
    else p.removeAttribute('hidden');
  }
}
