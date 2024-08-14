function runProgram(input) {
  let lines = input.trim().split("\n");
  let no = Number(lines.shift().trim());
  let string = lines.shift().trim();
  let max = "";

  for (let i = 0; i < no; i++) {
    let sub = string.slice(i);
    if (sub > max) max = sub;
  }
  console.log(max);
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
