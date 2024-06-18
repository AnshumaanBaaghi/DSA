function processData(input) {
  var num = Number(input);
  for (i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("MasaiSchool");
    } else if (i % 3 === 0) {
      console.log("Masai");
    } else if (i % 5 === 0) {
      console.log("School");
    } else {
      console.log(i);
    }
  }
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
