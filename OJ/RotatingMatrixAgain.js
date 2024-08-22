function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  let n = Math.sqrt(input.length);
  let matrix = [];
  let col = [];
  for (let i = 0; i < input.length; i++) {
    col.push(input[i]);
    if ((i + 1) % n === 0) {
      matrix.push(col);
      col = [];
    }
  }
  let output = [];
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      output.push(matrix[j][i]);
    }
  }
  console.log(output.join(" "));
}
if (process.env.USER === "") {
  runProgram(``);
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
