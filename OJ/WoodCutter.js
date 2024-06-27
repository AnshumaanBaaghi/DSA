const woodCutter = (n, m, arr) => {
  if (m == 0) return 0;
  let maxHeight = arr[0];

  let left = 0;
  let right = arr.reduce((acc, el) => {
    return acc < el ? el : acc;
  }, 0);
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    let collectedWood = 0;
    for (let i = 0; i < n; i++) {
      if (mid < arr[i]) {
        collectedWood += arr[i] - mid;
      }
    }
    if (collectedWood < m) {
      right = mid - 1;
    } else {
      maxHeight = mid;
      left = mid + 1;
    }
  }

  return maxHeight;
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(woodCutter(n, m, arr));
}
if (process.env.USERNAME === "divya") {
  runProgram(`4 7
20 15 10 17`);
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
