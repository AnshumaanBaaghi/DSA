function sumOfSpecialPairs(N, A) {
  let sum = 0;

  for (var i = 0; i < N; i++) {
    let start = i + 1;

    for (var j = start; j < N; j++) {
      if (i < j && toIdentifyPrime(j - i)) {
        let answer = Math.abs(A[j] - A[i]);
        sum += answer;
      }
    }
  }
  console.log(sum);
}

function toIdentifyPrime(num) {
  let count = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}
