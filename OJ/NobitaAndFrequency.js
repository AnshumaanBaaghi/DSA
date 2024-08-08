function runProgram(input) {
  input = input.split("\n");
  let a = +input[0];
  let str = input[1].split("");

  abc(a, str);
}
function abc(a, str) {
  let obj = {};
  for (let i = 0; i < a; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let x;
  let y = 0;
  for (let key in obj) {
    if (obj[key] > y) {
      y = obj[key];
      x = key;
    }
  }
  console.log(x);
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
