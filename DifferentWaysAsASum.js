//Enter code here
let obj = {};
function answer(N) {
  if (N === 0) {
    return 1;
  }

  if (N < 0) return 0;

  if (obj[N] === undefined) {
    obj[N] = answer(N - 1) + answer(N - 3) + answer(N - 4);
  }
  return obj[N];
}
function runProgram(input = ``) {
  // Write code here
  input = +input;
  console.log(answer(input));
}
if (process.env.USERNAME === "sd120") {
  runProgram(`5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input = ``) {
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
