const FinancialProblem = (N, arr) => {
  const stack = [];
  const greaterElements = new Array(N);
  const ans = new Array(N);
  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    greaterElements[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  for (let i = 0; i < N; i++) {
    if (greaterElements[i] == -1) {
      ans[i] = i + 1;
    } else {
      ans[i] = i - greaterElements[i];
    }
  }
  return ans;
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(FinancialProblem(N, arr).join(" "));
  }
}
if (process.env.USERNAME === "divya") {
  runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
