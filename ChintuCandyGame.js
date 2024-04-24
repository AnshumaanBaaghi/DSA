function chintuCandy(N) {
  let carry = 0;
  let copy = N;
  while (N > 9) {
    carry += Math.floor(N / 10);
    N = Math.floor(N / 10) + Math.floor(N % 10);
  }
  return carry + copy;
}

function runProgram(input) {
  let newInput = input.trim().split("\n").map(Number);
  newInput = newInput.slice(1);
  for (let i in newInput) {
    console.log(chintuCandy(newInput[i]));
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
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
