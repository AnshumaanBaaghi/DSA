function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(Number);
  }

  let t = input[0][0];

  input = input.slice(1);

  let out = [];
  for (let i = 0; i < t; i++) {
    out = input.splice(0, 2);
    check(out);
  }

  function check(mat) {
    let arr = mat[1];
    let pro = 1;
    for (let i = 0; i < arr.length; i++) {
      pro = pro * arr[i];
    }

    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(pro / arr[i]);
    }
    console.log(res.join(" "));
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
