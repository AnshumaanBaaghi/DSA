function runProgram(input) {
  var newInput = input.split(" ");
  var currentRecord = Number(newInput[0]);
  var runScoredSachin = Number(newInput[1]);

  if (runScoredSachin > currentRecord) {
    console.log("Broken");
  } else if (runScoredSachin == currentRecord) {
    console.log("Wao");
  } else {
    console.log("Not Yet");
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
