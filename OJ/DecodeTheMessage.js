function processData(input) {
  var arr = input;
  var n = arr.length;
  var count = 1;
  var temp = 0;
  var maxtemp = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      if (count > maxtemp) {
        maxtemp = count;
      }
      count = 1;
    }
  }

  console.log(maxtemp);
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
