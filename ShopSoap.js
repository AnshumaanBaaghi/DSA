function runProgram(input) {
  function recursion1(ar, lo, hi, key) {
    if (lo <= hi) {
      var mid = Math.floor(lo + (hi - lo) / 2);
      if (ar[mid] >= key) {
        ans = mid;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
      return recursion1(ar, lo, hi, key);
    } else {
      return ans;
    }
  }
  input = input.trim().split("\n");
  arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  for (var i = 3; i < input.length; i++) {
    var temp = Number(input[i]);
    var ans = arr.length;
    console.log(recursion1(arr, 0, arr.length - 1, temp));
  }
}
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
