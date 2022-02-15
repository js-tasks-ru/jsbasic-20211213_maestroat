import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
    this.modal = Modal;
    this.addEventListeners();
  }

  addProduct(product) {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    if (!product) {
      return;
    }
    let cartItemForProduct;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === product.id) {
        cartItemForProduct = this.cartItems[i];
      }
    }
    if (cartItemForProduct) {
      cartItemForProduct.count++;
    } else {
      cartItemForProduct = {
        count: 1,
        product: product,
      }
      this.cartItems.push(cartItemForProduct);
    }
    this.onProductUpdate(cartItemForProduct);
  }

  updateProductCount(productId, amount) {
    let cartItemForProduct;
    let cartItemIndex;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === productId) {
        cartItemForProduct = this.cartItems[i];
        cartItemIndex = i;
      }
    }
    cartItemForProduct.count += amount;
    if (cartItemForProduct.count === 0) {
      this.cartItems.splice(cartItemIndex, 1);
    }
    this.onProductUpdate(cartItemForProduct);
  }

  isEmpty() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    if (this.cartItems.length === 0) {
      return true
    } else return  false
  }

  getTotalCount() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    let sum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum = sum + this.cartItems[i].count;
    }
    return sum
  }

  getTotalPrice() {
    // СКОПИРУЙТЕ СЮДЯ СВОЙ КОД
    let sumPrice = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sumPrice += this.cartItems[i].product.price * this.cartItems[i].count;
    }
    // console.log(sumPrice);
    return sumPrice
  }

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${product.id}">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
      2
    )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
    // ...ваш код
    this.modal = new Modal();
    this.modal.open();
    this.modal.setTitle('Your order');
    // document.body.append(this.modal.elem);
    // let modalTitle = document.body.querySelector('.modal__title');
    // modalTitle.insertAdjacentHTML("afterbegin", "Your order");
    let modalBody = document.body.querySelector('.modal__body');
    // let Cart = createElement(`<div></div>`);
    // modalTitle.after(Cart);
    let Product = [];

    for (let i = 0; i < this.cartItems.length; i++) {
      Product[i] = this.renderProduct(this.cartItems[i].product, this.cartItems[i].count);
      // console.log(Product[i]);  updateProductCount(productId, amount)
      modalBody.append(Product[i]);
    }

    modalBody.append(this.renderOrderForm());

    let form = modalBody.querySelector('.cart-form');
    form.onsubmit = (e) => {
      this.onSubmit(e);
    }

    modalBody.addEventListener('click', (event) => {
      let Button = event.target.closest('button');
      if (!Button) return;

      console.log('OK');
      // let dataset = Button.target.dataset.productId;
      // console.log(dataset);

      const cartItemId = Button.closest('.cart-product').dataset.productId;

      // console.log(Button.className);
      if (Button.className === 'cart-counter__button cart-counter__button_minus') {
        this.updateProductCount(cartItemId, -1);}
      if (Button.className === 'cart-counter__button cart-counter__button_plus') {
        this.updateProductCount(cartItemId, 1);}
    });

  }

  onProductUpdate(cartItem) {
    // ...ваш код
    // console.log(cartItem);
    let modalBody = document.body.querySelector('.modal__body');
    let modalOpen = document.body.className;
    // console.log(modalOpen);
    if (modalOpen === "is-modal-open") {

      let productId = cartItem.product.id;
      let spiciness = cartItem.count;
      let Price = (cartItem.product.price * spiciness);

      // console.log(spiciness);
      let cart = modalBody.querySelectorAll('[data-product-id]');
      let infoPrice = modalBody.querySelector('.cart-buttons__info-price');
      // let info = this.getTotalPrice();
      let info = infoPrice.innerHTML;
      info = info.substring(1, 6);
      info = Number(info);
      let infoAll = [];
      if (info !== 0) {
        // console.log(info);
        for (let c of cart) {
          // console.log(c);
          let div = c.querySelector('.cart-counter');
          let span = div.querySelector('.cart-counter__count');
          let productPrice = c.querySelector(`.cart-product__price`);

          if (c.dataset.productId === productId) {
            productPrice.innerHTML = `€${Price.toFixed(2)}`;
            span.innerHTML = spiciness;
            if (spiciness === 0) {
              c.style.display = 'none';
            }
          }

          productPrice = productPrice.innerHTML;
          productPrice = productPrice.substring(1, 6);
          productPrice = Number(productPrice);
          console.log(productPrice);
          infoAll.push(productPrice);
        }

        let sum = 0;
        infoAll.forEach(x => {sum += x});
        info = sum;
        infoPrice.innerHTML = `€${info.toFixed(2)}`;
      }

      if (info === 0) {
        console.log(info);
        this.modal.close();}

    }
    this.cartIcon.update(this);

  }

  onSubmit(event) {
    // ...ваш код
    event.preventDefault();

    let modalBody = document.body.querySelector('.modal__body');
    let form = modalBody.querySelector('.cart-form');
    let button = modalBody.querySelector('[type="submit"]');
    button.classList.add('.is-loading');

    // button.onclick = async (e) => {
    //   e.preventDefault();

    let userFormData = new FormData(form);
    let response = fetch('https://httpbin.org/post', {
      method: 'POST',
      body: userFormData,
    });

    response.then((response) => {
      this.modal.setTitle('Success!');
      this.cartItems = [];
      this.cartIcon.update(this);

      modalBody.innerHTML = `<div class="modal__body-inner">
        <p>
        Order successful! Your order is being cooked :) <br>
    We’ll notify you about delivery time shortly.<br>
    <img src="/assets/images/delivery.gif">
      </p>
      </div>
        `;

    }, (error) => console.log(error));

  }


  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}
