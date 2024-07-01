function runProgram(input) {
  // Write code here

  input = input.trim().split("\n");
  let n = +input[0];
  let mat = [];

  for (let i = 1; i <= n; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }

  reverseRows(mat);
}

function reverseRows(mat) {
  mat.forEach((el, i) => {
    console.log(el.reverse().join(" "));
  });
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
