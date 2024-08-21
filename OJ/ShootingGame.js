function runProgram(input) {
  input = input.split("\n");
  for (let i = 1; i < input.length; i++) {
    let path = input[i].split(" ");
    let n = +path[0];
    let k = +path[1];
    console.log(minMoves(n, k));
  }
}

function minMoves(n, k) {
  const b = new Array(k + 1).fill(0);
  let m;
  for (m = 0; b[k] < n; m++) {
    for (let j = k; j > 0; j--) {
      b[j] += b[j - 1] + 1;
    }
  }
  return m;
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
