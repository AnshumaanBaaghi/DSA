function runProgram(input) {
  var num = Number(input);
  if (input == 0) {
    console.log("-1");
  } else {
    var i = Math.floor(32 / num);
    if (i == 0) {
      console.log("Too Low");
    } else {
      console.log(i);
    }
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
