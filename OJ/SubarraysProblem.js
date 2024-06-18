let lines, l;

function runProgram(input) {
  lines = input.split("\n");
  l = 0;
  let n = Number(lines[l++]);
  let arr = lines[l++].trim().split(" ").map(Number);
  // console.log(n ,arr)
  let evenCount = 1;
  let oddCount = 0;
  currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum % 2 == 0) evenCount++;
    else oddCount++;
  }
  let count =
    (oddCount * (oddCount - 1)) / 2 + (evenCount * (evenCount - 1)) / 2;
  console.log(count);
}
if (process.env.USER === "") {
  runProgram(`5
    2 5 4 4 4`);
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
