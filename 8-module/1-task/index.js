import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // ваш код ...

    if (this.elem.offsetHeight !== null && this.elem.getBoundingClientRect().top < 0) {
      let container = document.body.querySelector('.container');
      let containerLeft = container.getBoundingClientRect().right;
      const windowInnerWidth = document.documentElement.clientWidth;
        // console.log(windowInnerWidth);
        // console.log('OK');
        // this.elem.style.cssText = 'position: fixed; top: 50px;';
        this.elem.style.position = 'fixed';
        this.elem.style.top = 50 + 'px';
        this.elem.style.zIndex = 1000;
        let left = containerLeft + 20 + 'px';
        let right = (windowInnerWidth - 10 - this.elem.offsetWidth) + 'px';
        if (windowInnerWidth > 767) {
        if ((containerLeft + this.elem.offsetWidth) > (windowInnerWidth - 10)) {
        this.elem.style.left = right}
        else {this.elem.style.left = left}
        }

      }
    }
  
}
