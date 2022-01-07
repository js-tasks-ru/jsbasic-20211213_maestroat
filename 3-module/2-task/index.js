function filterRange(arr, a, b) {
  // ваш код...
  let res = arr.filter(item => (a <= item && item <= b));
	return res;
}
