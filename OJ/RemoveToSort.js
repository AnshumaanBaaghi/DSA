function runProgram(input) {
  input = input.split("\n")[1].split(" ").map(Number);
  let sortedArr = [],
    temp = -Infinity;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= temp) {
      sortedArr.push(input[i]);
      temp = input[i];
    }
  }
  console.log(sortedArr.join(" "));
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
