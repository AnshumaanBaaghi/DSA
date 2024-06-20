function runProgram(input) {
  input = input.trim().split("\n");
  let tc = input[0].trim();
  logic(tc);
}

function logic(n) {
  let obj = {};

  for (let x of n) {
    if (obj[x] == undefined) obj[x] = 1;
    else obj[x]++;
  }
  let flag = false;
  for (let x in obj) {
    if (obj[x] == 1) {
      console.log(x);
      flag = true;
      break;
    }
  }
  !flag && console.log("Not Found");
}

if (process.env.USERNAME === "") {
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
