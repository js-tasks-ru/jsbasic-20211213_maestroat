function hideSelf() {
  // ваш код...
  let buttonClick = document.body.querySelector('.hide-self-button');
  buttonClick.onclick = function() {
    buttonClick.hidden = true;
  }
  
}
