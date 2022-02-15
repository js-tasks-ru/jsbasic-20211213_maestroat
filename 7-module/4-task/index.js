
import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.config = { steps, value };
    this.render();
    // this.steps = steps;
    // this.value = value;
    // this.span()
    // this.click();
    this.clickDrag();
  }
  render() {
    this.elem = createElement(`
    <div class="slider">
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>
    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>
    <!--Шаги слайдера-->
    <div class="slider__steps">
        ${this.span()}
    </div>
  </div>
  `);
  }
  span() {
    let spanCreate = [];
    // console.log(this.config.steps, this.config.value);
    for (let i = 0; i<this.config.steps; i++) {
      let span = `<span></span>`;
      if (i === 0) {
        span = `<span class="slider__step-active"></span>`
      }
      spanCreate.push(span);
    }
    return spanCreate.join('');
  }


  clickDrag() {
    let slider = this.elem;
    let step = this.config.steps;
    let firstSpan = 1;
    let sliderSteps = slider.querySelector('.slider__steps');
    let sliderValue = slider.querySelector('.slider__value');
    let spanNumber = sliderSteps.querySelectorAll('span');
    let thumb = slider.querySelector('.slider__thumb');
    thumb.addEventListener('pointerdown', function () {
      if (firstSpan === 1) {
        spanNumber[0].classList.remove('slider__step-active');
        firstSpan++;
      }
      // console.log('pointerdown');
      thumb.ondragstart = () => false;
      let progress = slider.querySelector('.slider__progress');

      function move(event) {
        // let pageX = event.pageX;
        // let thumbWidth = thumb.offsetWidth / 2;
        slider.classList.add('slider_dragging');
        let left = event.clientX - slider.getBoundingClientRect().left;
        let leftRelative = left / slider.offsetWidth;
        if (leftRelative < 0) {
          leftRelative = 0;
        }
        if (leftRelative > 1) {
          leftRelative = 1;
        }
        let leftPercents = leftRelative * 100;
        let segments = step - 1;
        let approximateValue = leftRelative * segments;
        this.value = Math.round(approximateValue);
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;
        // thumb.style.left = pageX + 'px';
        // progress.style.width = `${pageX}%`;
        sliderValue.innerHTML = this.value;
        return leftPercents;
      }

      document.addEventListener('pointermove', move);

      document.onpointerup = function (event) {
        let left = event.clientX - slider.getBoundingClientRect().left;
        let leftRelative = left/slider.offsetWidth;
        let segments = step - 1;
        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);
        let valuePercents = value/segments * 100;
        valuePercents = Math.round(valuePercents);
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
        // console.log(valuePercents);
        document.removeEventListener('pointermove', move);
        slider.classList.remove('slider_dragging');
        let customEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
          detail: this.value, // значение 0, 1, 2, 3, 4
          bubbles: true // событие всплывает - это понадобится в дальнейшем
        });
        slider.dispatchEvent(customEvent)
        document.onpointerup = null;
      }
      // thumb.addEventListener('pointerup', function() {
      //   let customEvent = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      //     detail: value, // значение 0, 1, 2, 3, 4
      //     bubbles: true // событие всплывает - это понадобится в дальнейшем
      //   });
      //   slider.dispatchEvent(customEvent)
      // });
    })
  }
}
