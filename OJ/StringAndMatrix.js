function sm(n, m, mat, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let index = i % n;
    //   let flag ="false "
    for (let j = 0; j < m; j++) {
      if (mat[index][j] == str[i]) {
        mat[index][j] = "0";
        count++;
        break;
      }
    }
  }
  if (count == str.length) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let nandm = input[line].trim().split(" ").map(Number);
    let n = nandm[0];
    let m = nandm[1];
    let mat = [];
    line++;
    for (let j = 0; j < n; j++) {
      let arr = input[line].trim().split("");
      line++;
      mat.push(arr);
    }
    let str = input[line].trim().split("");
    line++;
    sm(n, m, mat, str);
  }
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
