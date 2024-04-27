function runProgram(input) {
  input = input.trim().split("\n");

  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      input[i][j] = Number(input[i][j]);
    }
  }
  var k = input[0][1];
  var tym = [];

  for (var i = 0; i < input[1].length; i++) {
    var time = 0;
    while (input[1][i] < k) {
      input[1][i]++;
      time++;
    }
    tym.push(time);
  }

  var max = 0;

  for (var i = 0; i < tym.length; i++) {
    if (tym[i] > max) max = tym[i];
  }
  console.log(max);
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
