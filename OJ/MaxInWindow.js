function check(n, k, arr) {
  let q = [];
  let i = 0;
  let j = 0;
  let ans = [];
  while (j < n) {
    while (q.length > 0 && q[q.length - 1] < arr[j]) {
      q.pop();
    }
    q.push(arr[j]);
    if (j - i + 1 === k) {
      ans.push(q[0]);
      if (arr[i] === q[0]) {
        q.shift();
      }
      i++;
    }
    j++;
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  check(n, k, arr);
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
