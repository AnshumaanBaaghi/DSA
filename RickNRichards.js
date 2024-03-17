function runProgram(input) {
  input = input.trim().split("\n");
  let tests = Number(input.shift());

  for (let i = 0; i < tests; i++) {
    let n = Number(input.shift());
    let arr = input.shift().trim().split(" ").map(Number);
    count1 = 0;
    count2 = 0;
    for (var j = 0, k = n - 1; j <= k; ) {
      while (count1 <= count2 && j <= k) {
        count1 += arr[j] / 2;
        j++;
      }
      while (count2 < count1 && j <= k) {
        count2 += arr[k];
        k--;
      }
    }
    console.log(j, n - 1 - k);
  }
}
if (process.env.USERNAME === "ganu") {
  runProgram(`
3
5
2 9 8 2 7
5
2 8 8 2 2
5
10 1 1 1 3
`);
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
