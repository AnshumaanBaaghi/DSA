process.stdin.resume();
process.stdin.setEncoding("utf8");

("use strict");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  var t = parseInt(readLine(), 10);
  for (var i = 0; i < t; i++) {
    var string = readLine();

    var array = string.split` `.map((x) => +x);
    array.sort(function (a, b) {
      return a - b;
    });
    var M = array[1];
    var N = array[0];
    var number = M / (N + 1);
    console.log(Math.ceil(number));
  }
}
