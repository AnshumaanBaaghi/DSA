function birthdayCakeCandles(candles) {
  // Write your code here
  let maxNumber = 0;
  let appearance = 0;

  for (let el of candles) {
    if (el > maxNumber) {
      maxNumber = el;
      appearance = 1;
    } else if (el === maxNumber) {
      appearance++;
    }
  }
  return appearance;
}
