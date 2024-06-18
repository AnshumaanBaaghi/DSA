function runProgram(input) {
  var newInput = input.split(" ");
  var a = newInput[0];
  var b = newInput[1];
  var c = newInput[2];
  var d = newInput[3];
  var e = newInput[4];

  var total = a * 1 + b * 2 + c * 3 + d * 4 + e * 6;
  console.log(total);
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
