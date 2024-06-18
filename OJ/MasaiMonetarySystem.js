let obj;
function runProgram(input) {
  input = input.split("\n").map(Number);
  for (let i = 0; i < input.length; i++) {
    obj = {};
    console.log(getMaxCoins(input[i]));
  }
}
function getMaxCoins(n) {
  if (n in obj) return obj[n];
  if (n == 1 || n == 0) {
    return n;
  }
  let sumAfterBreak =
    getMaxCoins(Math.floor(n / 2)) +
    getMaxCoins(Math.floor(n / 3)) +
    getMaxCoins(Math.floor(n / 4));

  obj[n] = Math.max(n, sumAfterBreak);
  return obj[n];
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
