function showSalary(users, age) {
  // ваш код...
  let name = [];
  let age1 = [];
  let value = [];
  let res = '';
  for (let key=0; key < users.length; key++) {
    name.push(users[key]["name"]);
    age1.push(users[key]["age"]);
    value.push(users[key]["balance"]);
    if (age1[key] <= age) {
      res += `${name[key]}, ${value[key]}\n`
    }
  }
  return res.trim(); // Обрезает пробелы и переносы строки в начале и в конце
}
// let user1 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };
// let user2 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 22,
//   "name": "Silver Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };
// Массив пользователей
// let users = [user1, user2];
// let result = showSalary(users, 21);
// console.log(result)
