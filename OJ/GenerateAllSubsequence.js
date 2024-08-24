function generateSubSequence(str, ans, index) {
  if (ans.length !== 0) {
    console.log(ans.join(""));
  }
  if (index == str.length) {
    return;
  }
  for (let i = index; i < str.length; i++) {
    ans.push(str[i]);
    generateSubSequence(str, ans, i + 1);
    ans.pop();
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let str = input[1];
  let ans = [];
  generateSubSequence(str, ans, 0);
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
