
import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.config = { steps, value };
    this.render();
    // this.steps = steps;
    // this.value = value;
    this.click()
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


  click() {
    let slider = this.elem;
    let step = this.config.steps;
    let firstSpan = 1;
    let sliderSteps = slider.querySelector('.slider__steps');
    let sliderValue = slider.querySelector('.slider__value');
    let spanNumber = sliderSteps.querySelectorAll('span');

    this.elem.addEventListener('click', function(event) {
      if (firstSpan == 1) {
        spanNumber[0].classList.remove('slider__step-active');
        firstSpan++;
      };

      let left = event.clientX - slider.getBoundingClientRect().left;
      let leftRelative = left / slider.offsetWidth;

      let segments = step - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      // console.log(value);
      let valuePercents = value/segments * 100;

      let thumb = slider.querySelector('.slider__thumb');
      let progress = slider.querySelector('.slider__progress');
      let leftPercents = valuePercents;
      // console.log(valuePercents);
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      sliderValue.innerHTML = value;

      let customEvent = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      });

      slider.dispatchEvent(customEvent)

    })
  }
}
