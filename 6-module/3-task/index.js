import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();    
    this.initCarousel();
    this.clickButton();
  }

  render() {
    this.elem = createElement(`<div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>
    <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div>
    <div class="carousel__inner">${this.slide()}</div></div>`
    )
  }
  slide() {
    let slide = [];
    // let data = ["penang-shrimp", "chicken-cashew", "red-curry-veggies", "chicken-springrolls"];
    for (let i=0; i<this.slides.length; i++) {
    let div = `<div class="carousel__slide" data-id="${this.slides[i].id}">
    <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
    <div class="carousel__caption"><span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
    <div class="carousel__title">${this.slides[i].name}</div>
    <button type="button" class="carousel__button">
    <img src="/assets/images/icons/plus-icon.svg" alt="icon"></button>
    </div></div>`;
    slide.push(div);
    // alert(slide);
  }
  
  return slide.join('');
}

initCarousel() {
  let buttonClickRight = this.elem.querySelector('.carousel__arrow_right');
  let buttonClickLeft = this.elem.querySelector('.carousel__arrow_left');
  let elemSlide = this.elem.querySelector('.carousel__inner');
  let elemsSlide = elemSlide.querySelectorAll('.carousel__slide');
  // alert(elemsSlide.length);
  // alert(elemSlide);
  let position = 0;
      if (position === 0)
      {buttonClickLeft.style.display = 'none'}

  buttonClickRight.onclick = function() {
    let width = elemSlide.offsetWidth;
    position += width;
    //  alert(position);
    let widthElem = 'translateX(-'+position+'px)';
    elemSlide.style.transform = widthElem;
      if (position !== 0)
      {buttonClickLeft.style.display = ''}
      if (position === width*(elemsSlide.length-1))
      {buttonClickRight.style.display = 'none'}
  }
  buttonClickLeft.onclick = function() {
    let width = elemSlide.offsetWidth;
    position -= width;
    //  alert(position);
      let widthElem = 'translateX(-'+position+'px)';
      elemSlide.style.transform = widthElem;
      if (position === 0)
      {buttonClickLeft.style.display = 'none'}
      if (position !== 0)
      {buttonClickLeft.style.display = ''}
      if (position !== width*(elemsSlide.length-1))
      {buttonClickRight.style.display = ''}
  }
    // return elemsSlide;
  }

  clickButton() {
  let elemSlide = this.elem.querySelector('.carousel__inner');
    
    let buttons = elemSlide.querySelectorAll('.carousel__button');
    // console.log(buttons);
    let customEvents = [];
    for (let j=0; j<buttons.length; j++) {     
    buttons[j].addEventListener('click', (event) => {
      customEvents[j] = new CustomEvent("product-add", {
        detail: buttons[j].parentNode.parentNode.dataset.id,
        bubbles: true
      });
      console.log(customEvents[j]);
      this.elem.dispatchEvent(customEvents[j]);
    });
    }
  }

}


// let carousel = new Carousel(slides);
// console.log(carousel.elem);
