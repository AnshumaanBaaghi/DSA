function fn(n, m) {
  let count = 0;

  let p1 = [-20, 5];
  let p2 = [3, 2];
  let p3 = [-5, -10];
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  let possible = true;

  while (n > 0 && m > 0 && possible == true) {
    possible = false;
    if (n + p2[0] > 0 && m + p2[1] > 0 && flag2 === false) {
      count++;
      n += p2[0];
      m += p2[1];
      flag2 = true;
      flag1 = false;
      flag3 = false;
      possible = true;
    } else if (n + p3[0] > 0 && m + p3[1] > 0 && flag3 === false) {
      count++;
      n += p3[0];
      m += p3[1];
      flag3 = true;
      flag1 = false;
      flag2 = false;
      possible = true;
    } else if (n + p1[0] > 0 && m + p1[1] > 0 && flag1 === false) {
      count++;
      n += p1[0];
      m += p1[1];
      flag1 = true;
      flag3 = false;
      flag2 = false;
      possible = true;
    }
  }
  console.log(count);
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line].trim().split(" ").map(Number);
    line++;
    fn(n, m);
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
