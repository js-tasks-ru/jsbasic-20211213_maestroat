function factorial(n) {
  // ваш код...
  let result = n;
  if(n ===0 || n ===1) {
    return 1;
  }
  
  while(n > 1) {
    // n--;
    result = result*(--n);
  }
  return result;
}

console.log(factorial(5));
