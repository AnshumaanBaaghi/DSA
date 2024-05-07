function runProgram(input) {
  var [i, j, k] = input.trim().split(" ").map(Number);
  let mat = [];
  for (let i = 0; i < 10; i++) {
    let arr = new Array(10).fill(0);
    mat.push(arr);
  }

  knight(i - 1, j - 1, k, mat);
  let ans = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (mat[i][j] == 1) ans++;
    }
  }
  console.log(ans);
}
function knight(i, j, k, mat) {
  if (i < 0 || j < 0 || i > 9 || j > 9) return 0;
  if (k === 0) {
    mat[i][j] = 1;
    return;
  }

  knight(i - 1, j - 2, k - 1, mat);
  knight(i - 1, j + 2, k - 1, mat);
  knight(i + 1, j - 2, k - 1, mat);
  knight(i + 1, j + 2, k - 1, mat);
  knight(i - 2, j - 1, k - 1, mat);
  knight(i - 2, j + 1, k - 1, mat);
  knight(i + 2, j - 1, k - 1, mat);
  knight(i + 2, j + 1, k - 1, mat);
}
if (process.env.USERNAME === "") {
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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
