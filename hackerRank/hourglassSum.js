function hourglassSum(arr) {
  // Write your code here
  let max = -Infinity;
  const findSum = (i, j) => {
    const a = arr[i][j];
    const b = arr[i][j + 1];
    const c = arr[i][j + 2];
    const d = arr[i + 1][j + 1];
    const e = arr[i + 2][j];
    const f = arr[i + 2][j + 1];
    const g = arr[i + 2][j + 2];
    const sum = a + b + c + d + e + g + f;
    if (max < sum) {
      max = sum;
    }
  };
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      findSum(i, j);
    }
  }
  console.log("max:", max);
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
