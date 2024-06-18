function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let size = Number(input.shift());
  input = input.map((a) => a.trim().split(" ").map(Number));

  let sum = 0;
  let sum1 = 0;
  for (var i = 0; i < size; i++) {
    sum += input[0][i];
    sum1 += input[1][i];
  }
  sum = Math.ceil(sum / size);
  sum1 = Math.ceil(sum1 / size);

  if (sum >= sum1 && sum % 2 === 0) {
    console.log(sum);
  } else if (sum1 > sum && sum1 % 2 === 0) {
    console.log(sum1);
  } else {
    console.log("-1");
  }
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
