function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr1 = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    logic(n, arr1);
  }
}
function logic(n, givenarr) {
  // console.log(n,arr1);
  let count = 0;
  let min = +Infinity;
  let shop = 0;

  let arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  for (let i = 0; i < n; i++) {
    count = 0;
    let x = givenarr[i];
    for (let j = 0; j < arr.length; j++) {
      if (x >= arr[j]) {
        count += Math.floor(x / arr[j]);
        x = x % arr[j];
      }
    }
    if (count < min) {
      min = count;
      shop = givenarr[i];
    }
  }
  console.log(shop);
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
