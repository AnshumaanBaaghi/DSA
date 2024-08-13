function findNextGreaterElement(array, size) {
  let res = [];
  let stack = [];

  for (let i = size - 1; i >= 0; i--) {
    if (res.length == 0) res.push(-1);

    if (stack.length > 0 && stack[stack.length - 1][0] > array[i]) {
      res.push(stack[stack.length - 1][1]);
    } else if (stack.length > 0 && stack[stack.length - 1][0] <= array[i]) {
      while (stack.length > 0 && stack[stack.length - 1][0] <= array[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1][1]);
      }
    }
    stack.push([array[i], i]);
  }
  res = res.reverse();
  //console.log(res);
  findNextSmallerElement(array, size, res);
}

function findNextSmallerElement(array, size, greater) {
  let res = [];
  let stack = [];

  for (let i = size - 1; i >= 0; i--) {
    if (res.length == 0) res.push(-1);

    if (stack.length > 0 && stack[stack.length - 1][0] < array[i]) {
      res.push(stack[stack.length - 1][1]);
    } else if (stack.length > 0 && stack[stack.length - 1][0] >= array[i]) {
      while (stack.length > 0 && stack[stack.length - 1][0] >= array[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1][1]);
      }
    }
    stack.push([array[i], i]);
  }
  res = res.reverse();
  // console.log(res);
  smallerActualElement(array, res, greater);
}

function smallerActualElement(array, smaller, greater) {
  // console.log(smaller,greater);

  let product = 0;
  for (let i = 0; i < array.length; i++) {
    if (greater[i] != -1 && smaller[greater[i]] != -1) {
      product += array[[smaller[greater[i]]]];
    } else {
      product += -1;
    }
  }
  console.log(product);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let testcases = Number(input[0]);
  let line = 1;

  for (let i = 0; i < testcases; i++) {
    let size = Number(input[line++]);
    let array = input[line++].trim().split(" ").map(Number);
    findNextGreaterElement(array, size);
    //findNextSmallerElement(array,size)
  }
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
