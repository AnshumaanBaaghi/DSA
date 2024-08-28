function logest(n, arr) {
  let max = 0;
  let count = 0;
  let num = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] != num) {
      num = arr[i];
      count = 0;
    }
    if (arr[i] % 2 != 0) {
      count++;
      max = Math.max(max, count);
    }
  }
  console.log(max);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  logest(n, arr);
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
