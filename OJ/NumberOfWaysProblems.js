function noOfWays(num) {
  if (num == 0) {
    return 1;
  }
  if (num < 0) {
    return 0;
  }
  return noOfWays(num - 1) + noOfWays(num - 2) + noOfWays(num - 3);
}

function runProgram(input) {
  input = +input;
  console.log(noOfWays(input));
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
