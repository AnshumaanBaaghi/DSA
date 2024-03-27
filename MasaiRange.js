// doing dry run for this logic of someone else
function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);
  var i = 1;
  while (t--) {
    let size = input[i].split(" ").map(Number);
    i++;
    var n = size[0];
    var k = size[1];
    var p = size[2];
    var arr = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    i++;
    if (fn(arr, k, n, p)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

function fn(arr, k, n, p) {
  for (var i = 0; i <= n - k; i++) {
    if (arr[i + k - 1] - arr[i] <= 2 * p) {
      return false;
    }
  }
  return true;
}

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
