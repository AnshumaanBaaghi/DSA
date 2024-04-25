function processData(input) {
  //Enter your code here
  var data = input.split("\n");
  var S = data[0].split("");
  var K = Number(data[1]);
  var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cap = cap.split("");
  var small = "abcdefghijklmnopqrstuvwxyz";
  var num = "0123456789";
  var num = num.split("");
  var small = small.split("");
  var res = [];
  var ans;
  for (var i = 0; i < S.length; i++) {
    if (cap.indexOf(S[i]) != -1) {
      ans = cap[(cap.indexOf(S[i]) + K) % 26];
      res.push(ans);
    } else if (small.indexOf(S[i]) != -1) {
      ans = small[(small.indexOf(S[i]) + K) % 26];
      res.push(ans);
    } else if (num.indexOf(S[i]) != -1) {
      ans = num[(num.indexOf(S[i]) + K) % 10];
      res.push(ans);
    } else {
      ans = S[i];
      res.push(ans);
    }
  }
  console.log(res.join(""));
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  processData(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
