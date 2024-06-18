function runProgram(input) {
  input = input.trim().split("\n");
  input[0] = input[0].split(" ");
  input[1] = input[1].split(" ");
  input[2] = input[2].split(" ");
  var stat = [];

  var n = input[0];
  for (var i = 0; i < n; i++) {
    if (input[1][i] <= 15) {
      if (input[2][i] <= 7) {
        stat.push("Boarding");
      } else stat.push("Stop");
    } else stat.push("Stop");
  }
  for (var i = 0; i < n; i++) {
    console.log(stat[i]);
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
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
