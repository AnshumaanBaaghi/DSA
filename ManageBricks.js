function runProgram(input) {
  input = input.split("\n");
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  getHeight(arr);
}

function getHeight(arr) {
  let rows = [];
  let firstRow = [arr[0]];
  rows.push(firstRow);
  let currentRow = [];
  let i = 1;
  while (i < arr.length) {
    let previousRowLength = rows[rows.length - 1].length;
    if (currentRow.length > previousRowLength) {
      rows.push(currentRow);
      currentRow = [arr[i]];
    } else {
      currentRow.push(arr[i]);
    }
    i++;
  }
  if (currentRow.length > rows[rows.length - 1].length)
    console.log(rows.length + 1);
  else console.log(rows.length);
}
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
