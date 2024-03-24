function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0].trim();
  let line = 1;

  while (t-- > 0) {
    let s1 = input[line++].trim();
    let s2 = input[line++].trim();
    solve(s1, s2);
  }
}

var solve = function (word1, word2) {
  // console.log(word1, word2);
  let mat = [];
  for (let i = 0; i < word2.length + 1; i++) {
    mat.push(new Array(word1.length + 1));
  }

  for (let i = 0; i < word1.length + 1; i++) mat[0][i] = i;
  for (let i = 1; i < word2.length + 1; i++) mat[i][0] = i;

  for (let i = 1; i <= word2.length; i++) {
    for (let j = 1; j <= word1.length; j++) {
      let t1 = mat[i - 1][j],
        t2 = mat[i][j - 1],
        t3 = mat[i - 1][j - 1];
      let min = Math.min(t1, t2);
      min = Math.min(min, t3);
      if (word1[j - 1] == word2[i - 1]) {
        mat[i][j] = t3;
      } else mat[i][j] = min + 1;
    }
  }
  console.log(mat[word2.length][word1.length]);
};

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
