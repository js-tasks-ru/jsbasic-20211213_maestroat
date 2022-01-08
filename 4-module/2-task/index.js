function makeDiagonalRed(table) {
  // ваш код...

  let trs = table.querySelectorAll('tr');
  for (i=0; i<trs.length; i++) {
  let tds = trs[i].querySelectorAll('td');
  table.rows[i].cells[i].style.backgroundColor = "red"; 
  }
  return table;
}