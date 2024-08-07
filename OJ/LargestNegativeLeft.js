function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = input[0];
  let l = 1;
  while (t-- > 0) {
    let n = Number(input[l++]);
    let arr = input[l++].trim().split(" ").map(Number);
    let ans = "";
    let max = 0;
    for (let i = 0; i < n; i++) {
      ans += max + " ";
      if (arr[i] < 0 && max == 0) max = arr[i];
      if (max != 0 && arr[i] < 0 && arr[i] > max) max = arr[i];
    }
    console.log(ans);
  }
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
