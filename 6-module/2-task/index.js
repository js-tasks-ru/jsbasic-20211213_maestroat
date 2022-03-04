// export default class ProductCard {
//   constructor(product) {
//   }
// }
import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = createElement('<div class="card">'+this.divCardTop()+this.divCardBody()+'</div>');
    this.buttonClick();

  }

  divCardTop() {
     let img = '<img src="../../assets/images/products/'+this.product.image+'" class="card__image" alt="product">';
     let span = '<span class="card__price">€'+this.product.price.toFixed(2)+'</span>';
     let div = '<div class="card__top">'+img+span+'</div>';
     return div;
  }

  divCardBody() {
    let cardTitle = '<div class="card__title">'+this.product.name+'</div>';
    let button = '<button type="button" class="card__button"><img src="../../assets/images/icons/plus-icon.svg" alt="icon"></button>';
    let div = '<div class="card__body">'+cardTitle+button+'</div>';
    return div;
  }

  buttonClick() {
    let button = this.elem.querySelector('.card__button');
    button.addEventListener('click', (event) => {
      let customEvent = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });
  }

}
