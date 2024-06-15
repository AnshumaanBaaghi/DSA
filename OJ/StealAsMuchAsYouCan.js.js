function runProgram(input) {
  input = input.trim().split("\n");
  let cap = +input[0];
  let n = +input[1];
  let value = input[2].trim().split(" ").map(Number);
  let wt = input[3].trim().split(" ").map(Number);
  steal(cap, n, value, wt);
}

function steal(cap, n, value, wt) {
  let data = [];
  for (let i = 0; i < n; i++) {
    let obj = {};
    obj.wt = wt[i];
    obj.value = value[i];
    obj.ratio = value[i] / wt[i];
    data.push(obj);
  }
  data.sort((a, b) => {
    return b.ratio - a.ratio;
  });

  let ans = 0;
  for (let i = 0; i < n && cap > 0; i++) {
    if (data[i].wt <= cap) {
      ans += data[i].value;
    } else {
      ans += cap * (data[i].value / data[i].wt);
    }
    cap -= data[i].wt;
  }
  console.log(Math.round(ans));
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
