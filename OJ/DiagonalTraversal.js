const check = (row, col, N) => {
  console.log("row, col:", row, col);
  if (row < 0 || col < 0 || row >= N || col >= N) return false;
  return true;
};

const diagonalTraversal = (N, matrix) => {
  let count = 2 * N - 1;
  let row = 0;
  let col = 0;
  let str = "";
  while (count > 0) {
    // upwards
    while (check(row, col, N)) {
      str += matrix[row][col] + " ";
      row--;
      col++;
    }
    col--;
    row += 2;
    count--;
    console.log("--------------");

    while (check(row, col, N)) {
      str += matrix[row][col] + " ";
      row++;
      col--;
    }
    row--;
    col += 2;
    count--;
    console.log("--------------");
  }
  console.log("str:", str);
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++].trim();
    const matrix = [];
    for (let j = 0; j < N; j++) {
      let arr = input[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
    diagonalTraversal(N, matrix);
  }
}
if (process.env.USERNAME === "divya") {
  runProgram(`3
1
20
2
1 2
3 4
3
1 2 3
4 5 6
7 8 9`);
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
