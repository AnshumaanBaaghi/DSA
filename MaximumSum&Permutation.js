function check(n, arr) {
  //console.log(n,arr)
  arr.sort(function (a, b) {
    return a - b;
  });
  let nm = 0;
  for (let i = 0; i < n; i++) {
    nm += arr[i] * i;
  }

  console.log(nm);
}

function runProgram(input) {
  input = input.split("\n");
  //console.log(input)
  let n = +input[0];

  let arr = input[1].trim().split(" ").map(Number);
  check(n, arr);
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
