function runProgram(input) {
  input = input.split("\n");
  var N = +input[0];
  var arr = input[1].split(" ").map(Number);
  wave(N, arr);
}
function wave(N, arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < N - 1; i += 2) {
    swap(arr, i, i + 1);
  }
  console.log(arr.join(" "));
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
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
