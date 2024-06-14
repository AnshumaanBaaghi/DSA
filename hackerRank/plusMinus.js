function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negitive = 0;
  let zero = 0;

  for (let el of arr) {
    if (el < 0) {
      negitive++;
    } else if (el > 0) {
      positive++;
    } else {
      zero++;
    }
  }
  const n = arr.length;
  console.log((positive / n).toFixed(6));
  console.log((negitive / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
