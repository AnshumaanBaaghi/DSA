function processData(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    let str = input[i];
    let arr = "";
    for (let j = str.length - 1; j >= 0; j--) {
      arr += str[j];
    }
    console.log(arr);
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
