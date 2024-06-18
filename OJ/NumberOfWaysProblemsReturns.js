let memory = [];
function runProgram(input) {
  const N = +input;

  // console.log(steps(N));
  steps(N);
  console.log(memory[memory.length - 1]);
}

function steps(N) {
  if (N < 0) return 0;
  else if (N == 0) return 1;

  if (memory[N]) {
    return memory[N];
  } else {
    memory[N] = steps(N - 1) + steps(N - 2) + steps(N - 3);
  }
  return memory[N];
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
