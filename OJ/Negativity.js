function runProgram(N) {
  // Write code here
  N = N.trim();
  output = N.split("\n");

  x = output[0];
  y = output[1].split(" ").map(Number);
  var z = [];

  for (i = 0; i < y.length; i++) {
    if (y[i] < 0) {
      z.push(y[i]);
    }
  }
  console.log(z.length);
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
