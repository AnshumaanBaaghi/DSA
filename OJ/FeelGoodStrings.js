function processData(input) {
  input = input.split("\n");
  var N = Number(input[0]);
  var words = input[1].split("");
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (
      words[i] == "a" ||
      words[i] == "e" ||
      words[i] == "i" ||
      words[i] == "o" ||
      words[i] == "u"
    )
      count++;
  }
  if (count >= N / 2) console.log("Feel good!");
  else console.log("Feel bad!");
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
