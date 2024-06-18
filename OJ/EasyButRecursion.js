function runProgram(input) {
  input = input.trim().split("\n");
  k = 0;
  n1 = Number(input[k]);
  for (let i = 0; i < n1; ++i) {
    ++k;
    n = Number(input[k]);
    ++k;
    arr = input[k].trim().split(" ").map(Number);
    console.log(fact(arr, 0));
  }

  function fact(arr, n) {
    if (arr[n] === undefined) return 0;
    return arr[n] + fact(arr, n + 1);
  }
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
