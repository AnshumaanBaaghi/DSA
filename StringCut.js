function runProgram(input) {
  input = input.split("");
  const mid = Math.floor(input.length / 2);
  if (input.length % 2 == 0) {
    console.log(reverse(input.slice(0, mid)) + reverse(input.slice(mid)));
  } else {
    console.log(
      reverse(input.slice(0, mid)) + input[mid] + reverse(input.slice(mid + 1))
    );
  }
}

function reverse(arr) {
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
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
