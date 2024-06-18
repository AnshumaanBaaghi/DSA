function runProgram(input) {
  // Write code here

  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);
    solveTrainees(n, arr);
  }
}

function solveTrainees(n, arr) {
  // console.log(n,arr)
  arr = arr.sort((a, b) => a - b);
  // console.log(arr)
  console.log(
    arr[Math.floor((arr.length - 1) / 2) + 1] -
      arr[Math.floor((arr.length - 1) / 2)]
  );
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
