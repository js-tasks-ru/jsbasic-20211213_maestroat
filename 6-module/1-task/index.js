/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
	this.rows = rows;
    // let thead = this.thead();
    // let tbody = this.tbody();
    this.elem = document.createElement("table");
    // Если вызываем метод, то только с this
    this.elem.innerHTML = "<table>"+this.thead()+this.tbody()+"</table>";
    this.buttonClick();
  }

  thead() {
	let thead = "<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>";
	
	// ВОЗВРАЩАЕТ СТРОКУ, А НЕ ОБЪЕКТ
	return thead;
  }
   
   tbody() {
	 let trs = [];
	 
	 for(let row of this.rows) {
	   // Формируем ячейки одной строки
	   let tds = '<td>'+row.name+'</td>'+'<td>'+row.age+'</td>'+'<td>'+row.salary+'</td>'+'<td>'+row.city+'</td>'+'<td><button class="button">[X]</button></td>';
	   
	   // Оборачиваем их в <tr>
	   let tr = '<tr>'+tds+'</tr>';
	   
	   // Добавляем в массив
	   trs.push(tr); // trs - массив строк, не объектов
	 }
   
	 // ВОЗВРАЩАЕТ СТРОКУ, А НЕ ОБЪЕКТ
	 return '<tbody>'+trs.join('')+'</tbody>';
   }

   buttonClick() {
	 // for (let key of this.elem.tbody)
   let button = this.elem.querySelectorAll('.button');
   // console.log(button);
   for (let i=0; i<button.length; i++) {
   button[i].addEventListener("click", function() {
	 button[i].parentNode.parentNode.remove()
   }); 
   }
   }

}
