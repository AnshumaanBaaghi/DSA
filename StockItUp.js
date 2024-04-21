function runProgram(input) {
  input = input.trim().split("\n");
  input[0] = Number(input[0]);
  input[1] = input[1].split(" ");
  var cost = [110, 120, 42, 53, 40, 32, 126];
  var quant = [5, 2, 2, 3, 2, 5, 2];
  for (var i = 0; i < input[1].length; i++) {
    input[1][i] = Number(input[1][i]);
  }

  var sum = 0;

  for (var i = 0; i < 7; i++) {
    sum = sum + input[1][i] * cost[i] * quant[i];
  }
  console.log(sum * input[0]);
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
