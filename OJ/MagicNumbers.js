function runProgram(input) {
  if (input % 4 == 0 || input % 7 == 0) {
    console.log("YES");
    return;
  }

  input = input.split("").map(Number);
  for (let i = 0; i < input.length; i++) {
    if (input[i] != 4 && input[i] != 7) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
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
