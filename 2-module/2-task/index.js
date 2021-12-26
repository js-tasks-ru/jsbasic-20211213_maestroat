function isEmpty(obj) {
  // ваш код...
  let sum = false;
  for (let key in obj) {
    if (key in obj === false) {sum = sum || false;} else {sum = sum || true;}

  }
  return !sum;
}
