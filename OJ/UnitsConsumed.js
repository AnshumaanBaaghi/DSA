function abc(n) {
  n = n - 80;
  if (n <= 150) {
    console.log(n / 3);
  } else if (n <= 650) {
    console.log(50 + (n - 150) / 5);
  } else {
    console.log(150 + (n - 650) / 10);
  }
}
function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  abc(n);
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
