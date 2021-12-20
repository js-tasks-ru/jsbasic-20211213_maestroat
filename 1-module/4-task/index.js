function checkSpam(str) {
  // ваш код...
  let nameSpam1 = '1xbet';
  let nameSpam2 = 'xxx';
  let lowerStr = str.toLowerCase();
  return lowerStr.includes(nameSpam1) || lowerStr.includes(nameSpam2);
}
