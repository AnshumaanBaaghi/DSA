function runProgram(input) {
  input = input.split("\n");
  for (i = 1; i < input.length; i += 2) {
    let n = +input[i];
    let nums = input[i + 1].split(" ").map(Number);
    let ans = solve(nums);
    console.log(ans.join(" "));
  }
}

function solve(arr) {
  const n = arr.length;
  const ans = [];
  const save = [];
  for (let i = 0; i < n; i++) {
    let count = 1;
    while (save.length > 0 && arr[save[save.length - 1]] <= arr[i]) {
      const temp = save[save.length - 1];
      count += ans[temp];
      save.pop();
    }
    ans.push(count);
    save.push(i);
  }
  return ans;
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
