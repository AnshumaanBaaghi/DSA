function runProgram(input) {
  let inp = input.trim().split(/[\r\n]+/);
  for (let i = 1; i < inp.length; i++) {
    let n = +inp[i];
    function findMilk(n) {
      if (n === 0) {
        return 1;
      }
      if (n < 0) {
        return 0;
      } else {
        return findMilk(n - 4) + findMilk(n - 8);
      }
    }
    console.log(findMilk(n));
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
