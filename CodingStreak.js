function codingStreak(N, mat) {
  let longestCodingStreakOfTheDay = -Infinity;
  for (let i = 0; i < N; i++) {
    let C = 0;
    let max = -Infinity;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === "C") {
        C++;
        if (j == mat[i].length - 1 && C > max) max = C;
      } else {
        if (C > max) max = C;
        C = 0;
      }
    }
    if (max > longestCodingStreakOfTheDay) longestCodingStreakOfTheDay = max;
  }

  let C = 0;
  let max = -Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === "C") {
        C++;
      } else {
        if (C > max) max = C;
        C = 0;
      }
    }
    if (i == N - 1 && C > max) max = C;
  }
  let longestCodingStreakOfAllDay = max;

  console.log(longestCodingStreakOfTheDay, longestCodingStreakOfAllDay);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let mat = [];
  let line = 1;
  for (let i = 0; i < N; i++) {
    mat.push(input[line++].trim());
  }
  codingStreak(N, mat);
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
