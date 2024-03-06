function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let line = 0;
  let t = +input[line++];
  while (t-- > 0) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(+input[line++]);
    solve(n, k, arr);
  }
}

function solve(n, k, arr) {
  arr.sort((a, b) => a - b);
  let min = 1;
  let max = arr[n - 1];
  let ans = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (isValid(n, k, arr, mid)) {
      ans = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(ans);
}

function isValid(n, k, arr, mid) {
  let dist = arr[0] + mid;
  let c = 1;
  for (let i = 1; i < n; i++) {
    if (dist <= arr[i]) {
      dist = arr[i] + mid;
      c++;
    }
  }

  return c >= k ? true : false;
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
