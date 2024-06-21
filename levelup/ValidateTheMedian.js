function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const arr2 = arr.sort((a, b) => a - b);
  if (n % 2 == 0) {
    const index1 = n / 2;
    const index2 = n / 2 - 1;
    const median = Math.floor((arr2[index1] + arr2[index2]) / 2);
    console.log(Math.abs(median - k));
    console.log(median <= k ? "Valid" : "Invalid");
  } else {
    const midIndex = Math.floor(n / 2);
    const median = arr2[midIndex];
    console.log(Math.abs(median - k));
    console.log(median <= k ? "Valid" : "Invalid");
  }
}
if (process.env.USERNAME === "divya") {
  runProgram(`5 3
1 2 3 4 5`);
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
