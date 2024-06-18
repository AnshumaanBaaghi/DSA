function runProgram(input) {
  input = input.trim().split("\n");
  let queue = [];
  for (let k = 1; k < input.length; k++) {
    let [operation, number] = input[k].trim().split(" ");
    if (operation === "E") {
      queue.push(number);
      console.log(queue.length);
    } else if (operation === "D") {
      if (queue.length === 0) {
        console.log(`-1 0`);
      } else {
        console.log(`${queue[0]} ${queue.length - 1}`);
        queue.shift();
      }
    }
  }
}

if (process.env.USERNAME === "poora") {
  runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
