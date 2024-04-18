function logic(n, arr) {
  let sideLane = [];
  let newLane = [0];

  for (let i = 0; i < n; i++) {
    let flag = 1;
    if (newLane[newLane.length - 1] + 1 == arr[i]) {
      newLane.push(arr[i]);
      flag = 0;
    }
    while (newLane[newLane.length - 1] + 1 == sideLane[sideLane.length - 1]) {
      newLane.push(sideLane[sideLane.length - 1]);
      sideLane.pop();
    }
    if (flag) {
      sideLane.push(arr[i]);
    }
  }

  if (newLane.length == n + 1) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
function runProgram(input) {
  // Write code here
  let inp = input.split("\n");
  for (let i = 0; i < inp.length; i += 2) {
    let n = +inp[i];
    if (n == 0) break;
    let arr = inp[i + 1].split(" ").map(Number);
    logic(n, arr);
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
