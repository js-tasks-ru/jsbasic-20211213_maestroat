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

      if (!this.elem.offsetWidth) {
        return;
      }
      // let initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
      // if (window.pageYOffset > initialTopCoord && this.elem.offsetHeight !== null) {
      if (!this.initialTopCoord) {
        this.initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
      }
      if (window.pageYOffset > this.initialTopCoord) {
      let container = document.body.querySelector('.container');
      let containerLeft = container.getBoundingClientRect().right;
      const windowInnerWidth = document.documentElement.clientWidth;
        // this.elem.style.cssText = 'position: fixed; top: 50px;';
        this.elem.style.position = 'fixed';
        this.elem.style.top = 50 + 'px';
        this.elem.style.right = '10px';
        this.elem.style.zIndex = 1000;

      let leftIndent = Math.min(containerLeft + 20,
        windowInnerWidth - this.elem.offsetWidth - 10) + 'px';
        this.elem.style.left = leftIndent;

        if (windowInnerWidth <= 767) {
          this.elem.style.position = '';
          this.elem.style.top = '';
          this.elem.style.left = '';
          this.elem.style.zIndex = '';
        }
      } else {
          this.elem.style.position = '';
          this.elem.style.top = '';
          this.elem.style.left = '';
          this.elem.style.zIndex = '';
      }
    }

}
