function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let sizeArr = Number(input.shift());
  arr = input[0].split(" ").map(Number);
  console.log(sum(arr, 1));

  function sum(arr, i) {
    if (i > arr.length - 1) {
      return 0;
    } else {
      return arr[i] + sum(arr, (i += 2));
    }
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
