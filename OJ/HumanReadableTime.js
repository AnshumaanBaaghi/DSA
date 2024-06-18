function runProgram(input) {
  input = +input.trim();

  let hoursCount = Math.floor(input / 60);
  let minsCount = input % 60;

  let output =
    (hoursCount <= 1 ? hoursCount + "hr" : hoursCount + "hrs") +
    " " +
    minsCount +
    "mins";

  console.log(output);
}

if (process.env.USERNAME == "") {
  runProgram(``);
} else {
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
}
