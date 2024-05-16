function applyBasicMaths(N, A) {
  let index = -1;
  let min = Math.min();
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        sum += A[j];
      }
    }
    if (sum % 7 === 0) {
      if (min > A[i]) {
        min = A[i];
        index = i;
      }
    }
  }
  console.log(index);
}
