import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.scrollMenu();
    this.categoriesMy();
  }

  render() {
  	this.elem = createElement(`<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    ${this.href()}
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`);
  }

  href() {
  	let categoriesHref = [];
  	for (let i=0; i<categories.length; i++) {
  		let Href = '<a href="#" class="ribbon__item ribbon__item_active" data-id="'+this.categories[i].id+'">'+this.categories[i].name+'</a>';
  		categoriesHref.push(Href);
  	}
	  console.log(categoriesHref);
  	return '<nav class="ribbon__inner">'+categoriesHref.join('')+'</nav>';
  }

  scrollMenu() {
  	let ribbonInner = this.elem.querySelector('ribbon__inner');

  	let buttonRight = this.elem.querySelector('.ribbon__arrow_right');
  	let buttonLeft = this.elem.querySelector('.ribbon__arrow_left');
  	buttonRight.onclick = function() {
  		ribbonInner.scrollBy(350, 0);
  	}
  	buttonLeft.onclick = function() {
  		ribbonInner.scrollBy(-350, 0);
  	};
    

  let scrollWidth = ribbonInner.scrollWidth;
	let scrollLeft = ribbonInner.scrollLeft;
	let clientWidth = ribbonInner.clientWidth;
	let scrollRight = scrollWidth - scrollLeft - clientWidth;
  	ribbonInner.addEventListener('scroll', function() {
  		if (scrollLeft === 0) {
  		buttonLeft.toogler('.ribbon__arrow_visible');
  			}
   
  		if (scrollRight < 0) {
  		buttonRight.classList.toogler('.ribbon__arrow_visible');
  			}
  		
    });
    }

    categoriesMy() {
    	let ribbonInner = this.elem.querySelector('ribbon__inner');
    	let clickHref = ribbonInner.querySelectorAll('.ribbon__item');
    	let customEvents = [];
    	for (let j=0; j<clickHref.length; j++) {  
    		if (clickHref[j].className === ribbon__item_active) {clickHref[j].classList.remove('.ribbon__item_active')};
  		clickHref[j].onclick = function(event) {
  		// event.preventDefault();
  		clickHref[j].classList.add('.ribbon__item_active');
  		customEvents[j] = new CustomEvent('ribbon-select', {
  		detail: clickHref[j].dataset.id, // уникальный идентификатора категории из её объекта
  		bubbles: true
		});
		this.elem.dispatchEvent(customEvents[j]);
  		return false;
  		}
  		}
    }

	}
