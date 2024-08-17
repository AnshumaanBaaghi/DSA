function solve(n, k, arr) {
  let i = 0,
    j = 0,
    count = 0,
    sum = 0;

  while (j < n) {
    sum += arr[j];
    if (sum < k) {
      count += j - i + 1;
    } else if (sum >= k) {
      while (sum >= k) {
        sum -= arr[i];
        i++;
      }
      if (sum < k) {
        count += j - i + 1;
      }
    }
    j++;
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;
  while (t-- > 0) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    solve(n, k, arr);
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
