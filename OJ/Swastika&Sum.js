function runProgram(input) {
  const [[n, m], ...mat] = input
    .split("\n")
    .map((e, i) => (!i ? e.split(" ").map(Number) : e.split(" ").map(Number)));

  const rowCenter = Math.floor(n / 2);
  const colCenter = Math.floor(m / 2);

  let rowSum = 0;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      rowSum += mat[i].slice(colCenter + 1).reduce((a, c) => a + c);
    } else if (i == n - 1) {
      rowSum += mat[i].slice(0, colCenter).reduce((a, c) => a + c);
    }
    rowSum += mat[i][colCenter];
  }

  let colSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j == 0 && i < rowCenter) {
        colSum += mat[i][j];
      }
      if (j == m - 1 && i > rowCenter) {
        colSum += mat[i][j];
      }
      if (i == rowCenter) {
        colSum += mat[i][j];
      }
    }
  }

  console.log(rowSum - colSum);
}
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
