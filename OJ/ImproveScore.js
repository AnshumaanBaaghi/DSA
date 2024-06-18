function improveScore(n, m, A) {
  //write code here
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += A[i];
  }
  let avg = sum / n;
  if (sum > m) {
    console.log(m);
  } else {
    console.log(sum);
  }
}
