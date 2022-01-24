
import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.elem = createElement(`<div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
        </h3>
      </div>
      <div class="modal__body">
      </div>
    </div>
  </div>`);

  }
  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
    this.buttonClose();
    this.keyEsc();
  }
  setTitle(title) {
    this.title = title;
    // console.log(this.title);
    let modalTitle = this.elem.querySelector('.modal__title');
    // console.log(modalTitle);
    modalTitle.insertAdjacentHTML("afterbegin", this.title)
  }
  setBody(node) {
    this.View = node;
    let modalBody = this.elem.querySelector('.modal__body');
    // console.log(modalBody);
    modalBody.append(this.View)
  }
  close() {
    this.elem.remove();
    document.querySelector('body').classList.remove('is-modal-open');
  }
  buttonClose() {
    let button = this.elem.querySelector('.modal__close');
    button.onclick = function () {
      button.parentNode.parentNode.parentNode.remove();
      document.body.classList.remove('is-modal-open');
    }
  }
  keyEsc() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
      }
    });
  }

}


