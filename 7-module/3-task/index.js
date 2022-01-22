
import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.config = { steps, value };
    this.render();
    // this.steps = steps;
    // this.value = value;
    // this.span()
    this.click();

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
    let steps = this.config.steps;
    let valueThis = this.config.value;
    let selectedSpan;
    let firstSpan = 1;
    let sliderSteps = slider.querySelector('.slider__steps');
    let sliderValue = slider.querySelector('.slider__value');
    let spanNumber = sliderSteps.querySelectorAll('span');

    this.elem.addEventListener('click', function(event) {
      if (firstSpan == 1) {
        spanNumber[0].classList.remove('slider__step-active');
        firstSpan++;
      }

      let target = event.target;
      while (target != this) {
      if (target.tagName === 'SPAN') {
        highlight(target);
        return;
      }
      target = target.parentNode;


      let left = event.clientX - slider.getBoundingClientRect().left;
      let leftRelative = left / slider.offsetWidth;

      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      console.log(value);
      let valuePercents = value / segments * 100;

      for (let i = 0; i<spanNumber.length; i++) {
        if (spanNumber[i].className === 'slider__step-active') {
          valueThis = i+1;
          console.log(valueThis);
          sliderValue.innerHTML = valueThis;
        }
      }

      let thumb = slider.querySelector('.slider__thumb');
      let progress = slider.querySelector('.slider__progress');
      let leftPercents = valuePercents;
      // console.log(valuePercents);
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;


      new CustomEvent('slider-change', { 
        detail: value,
        bubbles: true 
      });
    }
    });
    function highlight(node) {
      if (selectedSpan) {
        selectedSpan.classList.remove('slider__step-active');
      }
      selectedSpan = node;
      selectedSpan.classList.add('slider__step-active');
    }
  }
}
