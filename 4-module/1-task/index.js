function makeFriendsList(friends) {
  // ваш код...

let ul = document.createElement('ul');
document.body.append(ul);
// document.body.innerHTML = ul;
let liArr = [];
for (i=0; i<friends.length; i++) {
liArr[i] = friends[i].firstName + friends[i].lastName;
let li = document.createElement('li');
li.textContent = liArr[i];
ul.append(li);
}
return ul;
}
