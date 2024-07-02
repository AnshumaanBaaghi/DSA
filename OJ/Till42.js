const findSum = (N, arr) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i];
    if (arr[i] === 42) return sum;
  }
  return sum;
};
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let N = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  console.log(findSum(N, arr));
}
if (process.env.USERNAME === "divya") {
  runProgram(`7
23 32 1 0 -32 42 8`);
} else {
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
}
