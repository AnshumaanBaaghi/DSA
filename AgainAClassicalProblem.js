function isPossible(s) {
  const n = s.length;
  const st = [];
  for (let i = 0; i < n; i++) {
    const c = s.charAt(i);
    if (c === "(" || c === "{" || c === "[") {
      st.push(c);
    } else {
      if (st.length === 0) {
        return false;
      } else if (c === ")") {
        if (st[st.length - 1] === "(") {
          st.pop();
        } else {
          return false;
        }
      } else if (c === "]") {
        if (st[st.length - 1] === "[") {
          st.pop();
        } else {
          return false;
        }
      } else {
        if (st[st.length - 1] === "{") {
          st.pop();
        } else {
          return false;
        }
      }
    }
  }
  return st.length === 0;
}

function runProgram(input) {
  input = input.split("\n");
  for (let i = 1; i < input.length; i++) {
    let s = input[i];
    const dis = isPossible(s);
    if (dis === true) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
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
