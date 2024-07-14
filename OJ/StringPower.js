function runProgram(input) {
  input = input.split("\n");
  for (let i = 1; i < input.length; i++) {
    console.log(solve(input[i]));
  }
}

function solve(str) {
  let maxPower = 1,
    count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      maxPower = Math.max(maxPower, count);
      count = 1;
    }
  }
  return maxPower;
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
