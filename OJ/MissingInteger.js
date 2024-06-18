function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[0].trim().split(" ").map(Number);
  miss(arr);
}

if (process.env.USER === "") {
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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
function miss(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let acctualsum = arr.reduce((total, i) => total + i, 0);
  const ans = expectedSum - acctualsum;
  console.log(ans);
}
