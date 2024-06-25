function runProgram(input) {
  input = input.split("\n");
  let placement = {};
  for (let i = 0; i < 26; i++) {
    placement[input[0][i]] = i;
  }
  let prev = "",
    time = 0;
  for (let i = 0; i < input[1].length; i++) {
    if (i == 0) {
      time += placement[input[1][i]];
      prev = placement[input[1][i]];
    } else {
      time += Math.abs(placement[input[1][i]] - prev);
      prev = placement[input[1][i]];
    }
  }
  console.log(time);
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
