function runProgram(input) {
  input = input.split("\n");
  let testCase = Number(input[0]);
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    let key = Number(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    let res = solve(key, arr);
    console.log(res);
  }
}

function solve(target, arr) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] < target && arr[mid + 1] > target) {
      return [arr[mid], arr[mid + 1]].join(" ");
    } else if (arr[mid] > target && arr[mid - 1] < target) {
      return [arr[mid - 1], arr[mid]].join(" ");
    } else if (arr[mid] > target && arr[mid - 1] == undefined) {
      return ["Front", arr[mid]].join(" ");
    } else if (arr[mid] < target && arr[mid + 1] == undefined) {
      return [arr[mid], "Last"].join(" ");
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
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
