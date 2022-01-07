function makeDiagonalRed(table) {
  // ваш код...

  let trs = table.querySelectorAll('tr');
  let tds = [];
  for (i=0; i<trs.length; i++) {
  tds = trs[i].querySelectorAll('td');
  for (j=0; j<tds.length; j++) {
  table.rows[i].cells[j].style.backgroundColor = "red"; i++;

  }
  }
  return table;
}