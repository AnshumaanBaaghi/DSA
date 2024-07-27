function numOfWays(n, k) {
  if (n < k) return 0;
  if (n == k) return 1;
  return numOfWays(n, k + 1) + numOfWays(n, k + 3) + numOfWays(n, k + 5);
}

function runProgram(input) {
  // your code goes here
  var n = Number(input.trim());

  let res = numOfWays(n, 0);
  console.log(res);
}
runProgram("7");
