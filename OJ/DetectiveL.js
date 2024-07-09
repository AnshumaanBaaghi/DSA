function detectiveL(N, M, matrix) {
  let left = 0;
  let bottom = N - 1;
  let bag = "";
  let count = 0;
  while (count < N * M) {
    for (let i = 0; i <= bottom && count < N * M; i++) {
      (bag += matrix[i][left] + " "), count++;
    }
    left++;
    for (let i = left; i < M && count < N * M; i++) {
      (bag += matrix[bottom][i] + " "), count++;
    }
    bottom--;
  }
  console.log(bag);
}
if (process.env.USER === "") {
  runProgram("");
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
    runProgramm(read);
    process.et(0);
  });
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 1; i <= tc; i++) {
    let data = input[line].trim().split(" ").map(Number);
    let N = data[0];
    let M = data[1];
    let matrix = [];
    line++;
    for (let i = 0; i < N; i++) {
      matrix.push(input[line].trim().split(" ").map(Number));
      line++;
    }
    detectiveL(N, M, matrix);
  }
}
