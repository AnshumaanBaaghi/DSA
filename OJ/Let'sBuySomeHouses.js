function ok(len, arr) {
  let ans = -1;

  let ob = {};
  for (let i = 0; i < arr.length; i++) {
    if (ob[arr[i][0]] === undefined) {
      ob[arr[i][0]] = 1;
    } else {
      let prev = ob[arr[i][0]];
      ob[arr[i][0]] = prev + 1;
    }

    if (ob[arr[i][1]] === undefined) {
      ob[arr[i][1]] = 1;
    } else {
      let prev = ob[arr[i][1]];
      ob[arr[i][1]] = prev + 1;
    }
  }
  console.log(Object.keys(ob).length);

  //console.log(len,arr)
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var tc = +input[0];

  var line = 1;
  for (var i = 0; i < tc; i++) {
    var arr = [];
    var len = +input[line++];
    for (var j = 0; j < len; j++) {
      var a = input[line++].split(" ").map(Number);
      arr.push(a);
    }
    ok(len, arr);
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
  read = read.replace(/\nS/, "");
  runProgram(read);
});
