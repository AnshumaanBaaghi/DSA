function runProgram(input) {
  input = input.trim().split("\n");
  var marks = Number(input[0]);

  if (marks == 100) console.log("A");
  else if (marks >= 90) console.log("B");
  else if (marks >= 80) console.log("C");
  else if (marks < 80) console.log("F");
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
