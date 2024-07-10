//Enter code here
function odd(n, A) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] % 2 != 0) count++;
  }
  if (count % 2 != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let A = input[line++].trim().split(" ").map(Number);
    odd(n, A);
  }
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
