function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = Number(input[0]);
  input = input.slice(1);
  while (testCases--) {
    const [n, m] = input[0].trim().split(" ").map(Number);
    const mat = input
      .slice(1, n + 1)
      .map((e, i) => e.trim().split(" ").map(Number));

    // removing duplicates from rows;
    let newMat = [];
    for (let i = 0; i < n; i++) {
      let temp = {};
      for (let j = 0; j < m; j++) {
        if (!temp[mat[i][j]]) {
          temp[mat[i][j]] = 1;
        }
      }
      newMat.push(Object.keys(temp));
    }

    let distinctCount = {};
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (newMat[i][j] != undefined) {
          if (i == 0) {
            distinctCount[newMat[i][j]] = 1;
          } else if (distinctCount[newMat[i][j]]) {
            distinctCount[newMat[i][j]] += 1;
          }
        }
      }
    }

    let count = 0;
    for (let i in distinctCount) {
      if (distinctCount[i] == n) {
        count++;
      }
    }
    console.log(count);

    input = input.slice(n + 1);
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
