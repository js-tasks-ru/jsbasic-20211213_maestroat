import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.scrollMenu();
    this.categoriesSelect();
  }

  render() {
  	this.elem = createElement(`<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    ${this.href()}
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`);
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
  }

  href() {
  	let categoriesHref = [];
  	for (let i=0; i<this.categories.length; i++) {
  		let Href = '<a href="#" class="ribbon__item ribbon__item_active" data-id="'+this.categories[i].id+'">'+this.categories[i].name+'</a>';
  		categoriesHref.push(Href);
  	}
  	// console.log(categoriesHref);
  	return '<nav class="ribbon__inner">'+categoriesHref.join('')+'</nav>';
  }

  scrollMenu() {
  	let ribbonInner = this.ribbonInner;
    // console.log(ribbonInner);
  	let buttonRight = this.elem.querySelector('.ribbon__arrow_right');
    // console.log(buttonRight);
  	let buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
    // console.log(buttonLeft);

  	buttonRight.onclick = function() {
  		ribbonInner.scrollBy(350, 0);
  	}
  	buttonLeft.onclick = function() {
  		ribbonInner.scrollBy(-350, 0);
      // console.log(ribbonInner.scrollLeft);
  	};
    buttonRight.classList.add('ribbon__arrow_visible');
  	ribbonInner.addEventListener('scroll', function() {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
  		if (scrollLeft === 0) {
        // console.log('OK');
  		buttonLeft.classList.toggle('ribbon__arrow_visible')
  			}
  		if (scrollRight < 1) {
  		buttonRight.classList.remove('ribbon__arrow_visible')
  			}
  		else {buttonRight.classList.add('ribbon__arrow_visible')}

    });
    }

    categoriesSelect() {
      let ribbonInner = this.ribbonInner;
    	let clickHref = ribbonInner.querySelectorAll('.ribbon__item');
    	let customEvents = [];
    	for (let j=0; j<clickHref.length; j++) {
    		if (clickHref[j].className === 'ribbon__item_active') {clickHref[j].classList.remove('.ribbon__item_active')}
  		// clickHref[j].onclick = function(event) {
        clickHref[j].addEventListener('click', (event) => {
  		event.preventDefault();
  		clickHref[j].classList.add('ribbon__item_active');
  		customEvents[j] = new CustomEvent('ribbon-select', {
  		detail: clickHref[j].dataset.id, // уникальный идентификатора категории из её объекта
  		bubbles: true
		});
          // console.log(customEvents[j]);
		this.elem.dispatchEvent(customEvents[j]);
  		// return false;
  		});
  		}
    }

	}
