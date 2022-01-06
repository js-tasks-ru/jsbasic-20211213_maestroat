function highlight(table) {
  // ваш код...
  let tbodys = table.tBodies;
  let trs = tbodys[0].rows;
  // let trs = tbodys[0].querySelectorAll('tr');   
  let tds = [];
  for (i=0; i<trs.length; i++) {
    
    tds = trs[i].cells;
  for (j=0; j<tds.length; j++) {
    
    if (tds[j].dataset.available === "true") {
      trs[i].classList.add('available')
    }
    if (tds[j].dataset.available === "false") {
      trs[i].classList.add('unavailable')
    }
    if (j === tds.length-1 && !tds[j].hasAttribute('data-available')) {
      trs[i].setAttribute('hidden', '')
      // trs[i].hidden = true;
    } 
    if (tds[j].textContent === 'm') {trs[i].classList.add('male')};
     if (tds[j].textContent === 'f') {trs[i].classList.add('female')};
    if (tds[j].textContent < 18) {
      trs[i].style.textDecoration = "line-through"
    }
  }
  }
  return table;
}