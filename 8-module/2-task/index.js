import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.ProductCard = ProductCard;
    this.render();
    this.ProductCardArray();
    this.newCardArray = [];
  }
  render() {
    this.elem = createElement(`<div class="products-grid">
  <div class="products-grid__inner">
    <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
  </div>
</div>`);

  }
  ProductCardArray() {
    let card = this.elem.querySelector('.products-grid__inner');
    // console.log(this.products);
    for (let i=0; i<this.products.length; i++) {
     let ProductCard = new this.ProductCard(this.products[i]);
      // console.log(ProductCard.elem);
      card.append(ProductCard.elem);
    }
  }
  updateFilter(filters) {
    this.filters = filters;
    let card = this.elem.querySelector('.products-grid__inner');
    let cardArray = card.querySelectorAll('.card');
    // console.log(cardArray);

    for (let i=0; i<this.products.length; i++) {

      // console.log(this.products[i].spiciness);
      // console.log(this.filters.maxSpiciness);

      if ((this.filters.noNuts === true) && (this.products[i].nuts === undefined || this.products[i].nuts === false)) {
        this.newCardArray[i] = cardArray[i].outerHTML;
        }

      if (this.filters.vegeterianOnly === true && this.products[i].vegeterian === true) {
          this.newCardArray[i] = cardArray[i].outerHTML;
        }

      if (this.products[i].spiciness <= this.filters.maxSpiciness) {
        // console.log(cardArray[i]);
        this.newCardArray[i] = cardArray[i].outerHTML;
        }

      if (this.filters.category === undefined || this.filters.category === '' || this.filters.category === this.products[i].category) {
        this.newCardArray[i] = cardArray[i].outerHTML;
        }

    }
    if (this.newCardArray.length !== cardArray.length) {
      this.newCardArray = this.newCardArray.join('');
      // console.log(newCardArray);
      card.innerHTML = this.newCardArray;
    }
  }
}
