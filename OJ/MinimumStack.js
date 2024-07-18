// Time: O(1) Space: O(1)
function runProgram(input) {
  input = input.trim().split("\n");
  let stack = [];
  let currentMin = -1;
  for (let i = 1; i < input.length; i++) {
    let line = input[i].trim().split(" ");
    switch (line[0]) {
      case "push":
        push(Number(line[1]));
        break;
      case "pop":
        pop();
        break;
      case "getMin":
        getMin();
        break;
    }
  }

  function push(num) {
    // push in original stack
    if (stack.length === 0) {
      stack.push(num);
      currentMin = num;
    } else {
      if (num < currentMin) {
        stack.push(2 * num - currentMin);
        currentMin = num;
      } else {
        stack.push(num);
      }
    }
  }
  function pop() {
    let poppedEl = stack.pop();
    if (poppedEl < currentMin) {
      let realPoppedEl = currentMin;
      currentMin = 2 * currentMin - poppedEl;
      return realPoppedEl;
    } else {
      return poppedEl;
    }
  }
  function getMin() {
    console.log(currentMin);
  }
}
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
