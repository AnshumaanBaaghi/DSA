function runProgram(input) {
  input = input.trim().split("\n");
  let stack = [];
  let obj = {
    min: null,
  };
  for (let j = 1; j < input.length; j++) {
    //console.log(stack,obj);
    let [operaton, number] = input[j].trim().split(" ");
    if (operaton === "PUSH") {
      let num = Number(number);
      if (obj.min === null || num <= obj.min[0]) {
        if (obj.min === null || num < obj.min[0]) {
          obj.min = [num, 1];
        } else {
          obj.min = [num, obj.min[1] + 1];
        }
      }
      stack.push(num);
    } else if (operaton === "POP") {
      if (stack.length === 0) {
        console.log("EMPTY");
      } else {
        if (stack[stack.length - 1] === obj.min[0]) {
          if (obj.min[1] === 1) {
            if (stack.length === 1) {
              stack.pop();
              obj.min = null;
            } else {
              stack.pop();
              obj.min = [Math.min(...stack), 1];
            }
          } else {
            stack.pop();
            obj.min = [obj.min[0], obj.min[1] - 1];
          }
        } else {
          stack.pop();
        }
      }
    } else if (operaton === "MIN") {
      if (obj.min === null) {
        console.log("EMPTY");
      } else {
        console.log(obj.min[0]);
      }
    }
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
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
