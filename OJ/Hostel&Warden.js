function processData(input) {
  //Enter your code here
  input = input.split("\n");
  var n = Number(input[0]);
  var s = input[1]
    .trim()
    .split(" ")
    .map((a) => parseInt(a));
  s.sort((a, b) => a - b);
  var r = input[2]
    .trim()
    .split(" ")
    .map((a) => parseInt(a));
  r.sort((a, b) => a - b);
  // console.log(s)
  var maxCount = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    count = Math.abs(s[i] - r[i]);
    if (count > maxCount) {
      maxCount = count;
    }
  }
  console.log(maxCount);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
