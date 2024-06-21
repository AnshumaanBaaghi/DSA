const simpleChallenge = (n, arr) => {
  if (n === 1) {
    console.log(0);
    return;
  }

  let mx1 = -Infinity,
    mx2 = -Infinity;
  let mn1 = Infinity,
    mn2 = Infinity;

  for (let i = 0; i < n; i++) {
    mx1 = Math.max(mx1, arr[i] + i);
    mn1 = Math.min(mn1, arr[i] + i);
    mx2 = Math.max(mx2, arr[i] - i);
    mn2 = Math.min(mn2, arr[i] - i);
  }

  console.log(Math.max(mx1 - mn1, mx2 - mn2));
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);

    simpleChallenge(n, arr);
  }
}
if (process.env.USERNAME === "divya") {
  runProgram(`2
3
1 1 1
4
1 2 3 1`);
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
