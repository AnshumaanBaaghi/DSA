function runProgram(input) {
  input = input.trim();

  let count = 1;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i + 1]) {
      count++;
    } else {
      output += input[i] + count;
      count = 1;
    }
  }

  console.log(output);
}

if (process.env.USERNAME == "abdul") {
  runProgram(`aaabbbbcccaa`);
} else {
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
}
