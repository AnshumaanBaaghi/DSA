function runProgram(input) {
  let inp = input.split("\n");
  for (let i = 1; i < inp.length; i += 2) {
    let n = +inp[i];
    let arr = inp[i + 1].split(" ").map(Number);
    let ans = countPair(n, arr);
    console.log(ans);
  }
}

function countPair(n, a) {
  const save4 = new Map();
  const save5 = new Map();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += (save4.get(a[i] * 5) || 0) + (save5.get(a[i] * 4) || 0);
    if (a[i] === 0) {
      ans -= save5.get(a[i]) || 0;
    }
    save5.set(a[i] * 5, (save5.get(a[i] * 5) || 0) + 1);
    save4.set(a[i] * 4, (save4.get(a[i] * 4) || 0) + 1);
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
