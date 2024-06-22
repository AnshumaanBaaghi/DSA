function breakingRecords(scores) {
  // Write your code here
  let minCount = 0;
  let maxCount = 0;

  let minVal = scores[0];
  let maxVal = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxVal) {
      maxVal = scores[i];
      maxCount++;
    }
    if (scores[i] < minVal) {
      minVal = scores[i];
      minCount++;
    }
  }
  return [maxCount, minCount];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
