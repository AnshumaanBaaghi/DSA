function runProgram(input) {
  input = input.split("\n");
  var n = Number(input[0]);
  var symbols = input[1].split("");

  symbols.forEach(function (element) {
    switch (element) {
      case "@":
        n *= 10;
        break;
      case "!":
        n += 2;
        break;
      case "%":
        n -= 5;
        break;
      case "^":
        n **= 2;
        break;
      case "$":
        n += 37;
        break;
    }
  });

  console.log(n);
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
