function runProgram(input) {
  var input = input.split("\n");
  var n = +input[0];
  let A = [];
  for (let i = 1; i <= n; i++) {
    A.push(input[i].split(" "));
  }
  A.sort();
  A.sort((a, b) => b[1] - a[1]);
  let c = 1,
    d = 0;
  console.log(c, A[0][0]);
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1][1] == A[i][1]) {
      console.log(c, A[i][0]);
      d++;
    } else {
      c = c + 1 + d;
      console.log(c, A[i][0]);
      d = 0;
    }
  }
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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
