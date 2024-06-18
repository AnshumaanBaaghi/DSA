function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let dp = new Array(arr.length).fill(1);
  let maximum = [1];
  getMaximum(1, arr, dp, maximum);
  console.log(maximum[0]);
}

function getMaximum(currentindex, arr, dp, maxarr) {
  if (currentindex === arr.length) {
    return;
  } else {
    for (let j = 0; j < currentindex; j++) {
      if (arr[currentindex] > arr[j] && dp[currentindex] <= dp[j]) {
        dp[currentindex] = 1 + dp[j];
        if (dp[currentindex] > maxarr[0]) {
          maxarr[0] = dp[currentindex];
        }
      }
    }
    getMaximum(currentindex + 1, arr, dp, maxarr);
  }
}

if (process.env.USERNAME === "poora") {
  runProgram(`9
    10 22 9 33 21 50 41 60 80`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
