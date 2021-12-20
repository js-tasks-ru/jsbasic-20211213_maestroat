/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  
  if (name == null) {
    return false;
  }
  let nameLength = name.length;
  if (nameLength == 0 || nameLength < 4) {
    return false;
  }
  let nameSpace = name.includes(' ');
  if (nameSpace == true) {
    return false;
  } 
  name = true;
  return name;

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
