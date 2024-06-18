function mainsum(n, k, arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  arr.forEach((ele, ind) => {
    if (sum + ele <= k) {
      sum += ele;
      count++;
    }
  });
  console.log(count);
}

function runProgram(read) {
  read = read.trim().split("\n");
  let [n, k] = read[0].trim().split(" ").map(Number);
  let arr = read[1].trim().split(" ").map(Number);
  mainsum(n, k, arr);
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
