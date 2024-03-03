function runProgram(input) {
  input = input.split("\n");
  let matrix = [];
  for (let i = 1; i < input.length; i++) {
    matrix.push(input[i].split(""));
  }
  console.log(largestForest(matrix));
}

function largestForest(matrix) {
  let treesFoundMax = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "T") {
        let treesFound = traverse(i, j, matrix);
        treesFoundMax = Math.max(treesFoundMax, treesFound);
      }
    }
  }
  return treesFoundMax;
}

function traverse(i, j, matrix) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[0].length ||
    matrix[i][j] === "W"
  )
    return 0;
  matrix[i][j] = "W";
  let treesFound = 1;
  treesFound += traverse(i - 1, j, matrix); // top
  treesFound += traverse(i + 1, j, matrix); // bottom
  treesFound += traverse(i, j - 1, matrix); // left
  treesFound += traverse(i, j + 1, matrix); // right
  return treesFound;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
