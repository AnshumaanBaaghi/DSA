function runProgram(input) {
  input = input.split("\n");
  const t = Number(input[0]);
  for (let i = 1; i <= t; i++) {
    const [n, k] = input[i].split(" ").map(Number);
    let low = 1;
    let high = n;
    let ans;
    while (low <= high) {
      // take care of this finding mid, b/c of it, I've to make many submissions.
      const mid = Math.floor((low + high) / 2);
      if (!predicateFunc(n, mid, k)) {
        low = mid + 1;
      } else {
        ans = mid;
        high = mid - 1;
      }
    }
    console.log(ans);
  }
}

function predicateFunc(n, h, k) {
  let time = h,
    i = 1;
  while (Math.floor(h / k ** i) != 0 && time < n) {
    time += Math.floor(h / k ** i);
    i++;
  }

  return time >= n;
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
