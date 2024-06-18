function runProgram(input) {
  input = input.trim().split("");
  let stack = [];
  for (let j = 0; j < input.length; j++) {
    while (
      stack.length >= 2 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
    }
    stack.push(input[j]);
  }
  while (
    stack.length >= 2 &&
    stack[stack.length - 1] === stack[stack.length - 2]
  ) {
    stack.pop();
    stack.pop();
  }
  if (stack.length === 0) {
    console.log("Empty String");
  } else {
    console.log(stack.join(""));
  }
}

if (process.env.USERNAME === "poora") {
  runProgram(`aaabccddd`);
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
