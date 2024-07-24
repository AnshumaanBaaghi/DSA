function runProgram(input) {
  input = input.trim().split("\n");

  let tests = +input[0];

  let line = 1;
  for (let i = 0; i < tests; i++) {
    let [num1, num2] = input[line++].trim().split(" ").map(Number);
    let n1 = (num1 >>> 0).toString(2);
    let n2 = (num2 >>> 0).toString(2);
    if (n1.length > n2.length) {
      n2 = "0".repeat(n1.length - n2.length) + n2;
    }
    if (n1.length < n2.length) {
      n1 = "0".repeat(n2.length - n1.length) + n1;
    }
    let i = 0;
    let total = 0;
    while (i < n1.length) {
      if (n1[i] !== n2[i++]) total++;
    }
    console.log(total);
  }
}

function getBinary(num) {
  if (num === 0) return "0";
  let obj = {};
  while (num > 1) {
    let val = Math.floor(Math.sqrt(num));
    obj[val] = 1;
    num -= val;
  }
  if (num === 1) {
    obj[0] = 1;
  }
  let max = Math.max(...Object.keys(obj).map(Number));
  let res = "";
  while (max >= 0) {
    res += max-- in obj ? "1" : "0";
  }
  console.log(obj);
  return res;
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
