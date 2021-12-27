function sumSalary(salaries) {
  // ваш код...
let sum = 0;
for (let key in salaries) {
  if (typeof salaries[key] === "number") {
    if (salaries[key] !== null) {
        if (isFinite(salaries[key]) !== false) {
         
      sum = sum + salaries[key];
    }}}
}
return sum;
}

