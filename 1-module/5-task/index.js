function truncate(str, maxlength) {
  // ваш код...
  let strLenght = str.length;
  if (strLenght > maxlength) {
    str = str.slice(0, maxlength-1);
    str = str + "…";
    return str;
  }
  return str;
}
