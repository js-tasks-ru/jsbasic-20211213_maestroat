import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    // ... ваш код
    let carousel = new Carousel(slides);
    let arouselHolder = document.body.querySelector('[data-carousel-holder]');
    arouselHolder.append(carousel.elem);

    this.ribbonMenu = new RibbonMenu(categories);
    let ribbonHolder = document.body.querySelector('[data-ribbon-holder]');
    ribbonHolder.append(this.ribbonMenu.elem);

    let config = {
      steps: 5, // количество шагов слайдера, начинаются с нуля, т.е. шаги в этом случае будут 0-1-2-3-4
      value: 3 // начальное значение, текущий выбранный шаг
    }
    this.stepSlider = new StepSlider(config);
    let sliderHolder = document.body.querySelector('[data-slider-holder]');
    sliderHolder.append(this.stepSlider.elem);

    this.cartIcon = new CartIcon();
    let cartIconHolder = document.body.querySelector('[data-cart-icon-holder]');
    cartIconHolder.append(this.cartIcon.elem);

    this.cart = new Cart(this.cartIcon);

    let url = 'products.json';
    let response = await fetch(url);

    let arrayProduct = await response.json();
    // console.log(arrayProduct);
    this.productsGrid = new ProductsGrid(arrayProduct);
    let productsGridHolder = document.body.querySelector('[data-products-grid-holder]');
    productsGridHolder.innerHTML = '';
    productsGridHolder.append(this.productsGrid.elem);

    this.productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: this.stepSlider.value,
      category: this.ribbonMenu.value
    });
    // console.log(document.getElementById('nuts-checkbox').checked)

    document.body.addEventListener('product-add', (e) => {
      // console.log(e);
      let productId = e.detail;
      // productId = productId.split('');
      let firstLetter = productId[0];
      firstLetter = firstLetter.toUpperCase();
      productId = productId.replace(/-/g, ' ');
      productId = firstLetter + productId.slice(1);

      // productId.forEach((item, index) => {
      //   if (item === '-') {productId.splice(index, 1, ' ')}
      // });
      // productId.splice(0, 1, firstLetter);
      // productId = productId.join('');
      console.log(productId);

      for (let i=0; i<arrayProduct.length; i++) {
        // console.log(arrayProduct[i].name);
        if (arrayProduct[i].name === productId) {
          // console.log(arrayProduct[i]);
          this.cart.addProduct(arrayProduct[i]);
        }
      }
    });

    this.stepSlider.elem.addEventListener('slider-change', (e) =>
    {
      // console.log(e);
      let spiciness = e.detail;
      this.productsGrid.updateFilter({
        maxSpiciness: spiciness // значение остроты из события 'slider-change'
      });
    });

    this.ribbonMenu.elem.addEventListener('ribbon-select', (e) => {
      // console.log(e);
      let category = e.detail;
      this.productsGrid.updateFilter({
        category: category // категория из события 'ribbon-select'
      });
    });

    let changeNuts = document.getElementById('nuts-checkbox');
    changeNuts.onchange = () => {
    if (changeNuts.checked === false) {
      this.productsGrid.updateFilter({
        noNuts: false // новое значение чекбокса
      })
    }
    if (changeNuts.checked === true) {
      this.productsGrid.updateFilter({
        noNuts: true // новое значение чекбокса
      })
      }
      // console.log(document.getElementById('nuts-checkbox').checked)
    }
    let changeVeget = document.getElementById('vegeterian-checkbox');
    changeVeget.onchange = () => {
      if (changeVeget.checked === false) {
      this.productsGrid.updateFilter({
        vegeterianOnly: false // новое значение чекбокса
      })
      }
      if (changeVeget.checked === true) {
        this.productsGrid.updateFilter({
          vegeterianOnly: true // новое значение чекбокса
      })
      }
    }

  }
}
