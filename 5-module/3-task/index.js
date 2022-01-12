function initCarousel() {
  // ваш код...
  let buttonClickRight = document.body.querySelector('.carousel__arrow_right');
  let buttonClickLeft = document.body.querySelector('.carousel__arrow_left');
  let elem = document.body.querySelector('.carousel__inner');
  let elems = document.body.querySelectorAll('.carousel__slide');
  
  let width = elem.offsetWidth;
  let position = 0;

  // alert(elems.length);
      if (position === 0)
      {buttonClickLeft.style.display = 'none'}

 
  buttonClickRight.onclick = function() {
    position += width;
    
    let widthElem = 'translateX(-'+position+'px)';
    elem.style.transform = widthElem;
    // alert(position);
      if (position !== 0)
      {buttonClickLeft.style.display = ''}
      if (position === width*(elems.length-1))
      {buttonClickRight.style.display = 'none'}

  }
  buttonClickLeft.onclick = function() {

    position -= width;
    
      let widthElem = 'translateX(-'+position+'px)';
      elem.style.transform = widthElem;
      // alert(position);
      if (position === 0)
      {buttonClickLeft.style.display = 'none'}
      if (position !== 0)
      {buttonClickLeft.style.display = ''}
      if (position !== width*(elems.length-1))
      {buttonClickRight.style.display = ''}

  }
}
