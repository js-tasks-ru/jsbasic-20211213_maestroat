function camelize(str) {
  // ваш код...
let arr = str.split('');
let res = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '-') {res.push(arr[i])} else {res.push(arr[i+1].toUpperCase()); i++;};
}
res = res.join('');
return res
}
// let str = 'background-color';
// console.log(camelize(str))