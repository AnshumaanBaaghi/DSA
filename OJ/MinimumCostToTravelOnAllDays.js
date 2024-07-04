function runProgram(input) {
  // your code goes here
  input = input.trim().split("\n");
  let t = Number(input[0]);

  for (let i = 1; i < input.length - 1; i += 3) {
    let costs = input[i].trim().split(" ").map(Number);
    let n = Number(input[i + 1]);
    let arr = input[i + 2].trim().split(" ").map(Number);
    travelAllDays(costs, n, arr);
    t--;
    if (!t) {
      break;
    }
  }
}

function travelAllDays(costs, n, arr) {
  let dp = [];
  for (let i = 0; i < 366; i++) {
    dp.push(new Array(366).fill(-1));
  }
  console.log(recursion(0, 0));

  function recursion(index, lastValidDate) {
    if (index >= n) {
      return 0;
    }

    if (dp[index][lastValidDate] >= 0) {
      return dp[index][lastValidDate];
    }

    if (arr[index] <= lastValidDate) {
      return (dp[index][lastValidDate] = Math.min(
        recursion(index + 1, lastValidDate),
        recursion(index + 1, arr[index]) + costs[0],
        recursion(index + 1, arr[index] + 6) + costs[1],
        recursion(index + 1, arr[index] + 29) + costs[2]
      ));
    } else {
      return (dp[index][lastValidDate] = Math.min(
        recursion(index + 1, arr[index]) + costs[0],
        recursion(index + 1, arr[index] + 6) + costs[1],
        recursion(index + 1, arr[index] + 29) + costs[2]
      ));
    }
  }
}

if (process.env.USERNAME === "Masai") {
  runProgram(testcase);
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
