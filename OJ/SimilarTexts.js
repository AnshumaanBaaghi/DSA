function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let x = str1.length;
  let y = str2.length;
  let dp = [];
  for (let k = 0; k <= x; k++) {
    let arr = [];
    for (let j = 0; j <= y; j++) {
      arr.push(undefined);
    }
    dp.push(arr);
  }
  for (let k = 0; k <= x; k++) {
    for (let j = 0; j <= y; j++) {
      if (k === 0 || j === 0) {
        dp[k][j] = 0;
      } else if (str1[k - 1] === str2[j - 1]) {
        dp[k][j] = 1 + dp[k - 1][j - 1];
      } else {
        dp[k][j] = Math.max(dp[k - 1][j], dp[k][j - 1]);
      }
    }
  }
  console.log(dp[dp.length - 1][dp[0].length - 1]);
}

if (process.env.USERNAME === "poora") {
  runProgram(`AEDFHR
    ABCDGH`);
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
