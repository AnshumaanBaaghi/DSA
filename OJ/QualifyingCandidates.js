function runProgram(input) {
  // Write code here
  input = input.split("\n");
  tc = +input[0];
  line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, cutoff] = input[line].split(" ").map(Number);
    line++;
    let arr = input[line].split(" ").map(Number);
    line++;
    checkmarks(N, cutoff, arr);
  }
}
function checkmarks(N, cutoff, arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  res = [];
  count = 0;
  rank = 1;
  prev = -1;
  for (let i = 0; i < N; i++) {
    if (arr[i] == prev) {
      res.push(rank);
    } else {
      rank += count;
      res.push(rank);
      count = 0;
    }
    count++;
    prev = arr[i];
  }

  res = res.filter((r) => {
    return r <= cutoff;
  });
  console.log(res.length);
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
