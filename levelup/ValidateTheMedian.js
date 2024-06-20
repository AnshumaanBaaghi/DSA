const validateMedian = (n, k, arr) => {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  let median;
  arr = arr.sort((a, b) => a - b);
  if (n % 2 == 0) {
    const index1 = n / 2;
    const index2 = n / 2 - 1;
    median = (arr[index1] + arr[index2]) / 2;
  } else {
    const midIndex = Math.floor(n / 2);
    median = arr[midIndex];
  }
  console.log(Math.abs(median - k));
  console.log(median <= k ? "Valid" : "Invalid");
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  validateMedian(n, k, arr);
}
if (process.env.USERNAME === "divya") {
  runProgram(`90 77
52 78 50 64 45 85 60 83 99 96 62 65 49 47 19 14 72 61 25 81 14 80 28 19 38 80 91 77 11 70 64 84 88 55 90 46 41 73 17 33 14 34 52 64 95 73 89 23 99 89 26 68 17 37 22 12 17 18 35 55 100 57 47 100 29 98 77 100 71 10 73 55 90 14 46 55 59 86 81 84 86 81 75 17 48 99 76 100 70 44`);
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
