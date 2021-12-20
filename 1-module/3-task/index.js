function ucFirst(str) {
  // ваш код...
  let nameSpace = str.includes(' ');
  if (nameSpace == true) {
    return false;
  }
  let nameLength = str.length;
  if (nameLength > 1) {
    let firstLetter = str[0];
    let subString = str.slice(1);
    firstLetter = firstLetter.toUpperCase();
    let nameSum = firstLetter + subString;
    str = nameSum;
    return str;
  }
  else {
    str = str.toUpperCase();
    return str;
  }
}
