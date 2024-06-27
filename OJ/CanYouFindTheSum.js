function runProgram(input) {
  input = input.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].trim().split(" ").map(Number);

  let xStack = [],
    xValues = [];
  for (let i = 0; i < n; i++) {
    if (xStack.length == 0) {
      xValues.push(-1);
      xStack.push([arr[i], i + 1]);
    } else {
      while (xStack.length != 0 && xStack[xStack.length - 1][0] <= arr[i]) {
        xStack.pop();
      }
      if (xStack.length == 0) {
        xValues.push(-1);
        xStack.push([arr[i], i + 1]);
      } else {
        xValues.push(xStack[xStack.length - 1][1]);
        xStack.push([arr[i], i + 1]);
      }
    }
  }

  let yStack = [],
    yValues = [];
  for (let j = n - 1; j >= 0; j--) {
    if (yStack.length == 0) {
      yValues.push(-1);
      yStack.push([arr[j], j + 1]);
    } else {
      while (yStack.length != 0 && yStack[yStack.length - 1][0] <= arr[j]) {
        yStack.pop();
      }
      if (yStack.length == 0) {
        yValues.push(-1);
        yStack.push([arr[j], j + 1]);
      } else {
        yValues.push(yStack[yStack.length - 1][1]);
        yStack.push([arr[j], j + 1]);
      }
    }
  }

  for (let j = 0, k = n - 1; j < Math.floor(yValues.length / 2); j++, k--) {
    let temp = yValues[j];
    yValues[j] = yValues[k];
    yValues[k] = temp;
  }

  console.log(xValues.map((value, i) => value + yValues[i]).join(" "));
}
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
