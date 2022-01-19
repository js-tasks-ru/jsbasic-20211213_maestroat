import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.open();
    this.setTitle('modal title');
    this.setBody(node);
    this.close();
    this.buttonClose();
  }

  open() {
    document.querySelector('body').classList.add('is-modal-open');
    this.elem = document.createElement(`div`);
    this.elem.innerHTML = `<div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
          ${this.modalTitle}
        </h3>
      </div>
      <div class="modal__body">
        ${this.View}
      </div>
    </div>
  </div>`
  // document.body.appendChild(this.elem)
  }
  setTitle() {
  this.modalTitle = 'modal title';

  }
  setBody() {
    console.log(this.elem.querySelector('.modal__body').childNodes);
  this.View = node;
    let modalBody = document.createElement('div');
    modalBody.innerHTML = `<b>${this.View}<b/>`

  }
  close() {
    this.elem.querySelector('.modal').remove();
    this.elem.querySelector('body').classList.remove('is-modal-open');
  }
  buttonClose() {
    let modal = this.elem.querySelector('.modal');
    let button = modal.querySelector('.modal__close');
    button.onclick = function () {
      modal.remove();
      document.querySelector('body').classList.remove('is-modal-open');
    }
  }


}