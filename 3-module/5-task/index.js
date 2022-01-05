function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let min;
  let max;
  let newArr= [];
  for (let i = 0; i < arr.length; i++) {
        if (isFinite(+arr[i]) !== false) {
                    newArr.push(arr[i]); 
  }
  }
     newArr.sort((a,b)=>b-a)
  
  let result = {
    min: newArr[newArr.length - 1],
    max: newArr[0],
  }
  return result;
}

// let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
// console.log(getMinMax(inputData));
 // { min: -5.8, max: 73  }
 function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let newArr= [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof +arr[i] === "number") {
      if (+arr[i] !== null) {
        if (isFinite(+arr[i]) !== false) {
          newArr.push(arr[i]);            
  }
  }
  }
  }     
  let result = {
    min: Math.min.apply(null, newArr),
    max: Math.max.apply(null, newArr),
  };
  return result;
}