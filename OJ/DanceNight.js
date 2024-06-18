function runProgram(input1) {
  // Write code here
  var input = input1.toString().split("\n");
  var tc = parseInt(input[0]),
    p = 1;
  while (tc--) {
    var line = input[p].toString().split(" ");
    var n = parseInt(line[0]),
      m = parseInt(line[1]);
    var arr = input[p + 1].toString().split(" ");
    for (var i = 0; i < n; i++) arr[i] = parseInt(arr[i]);
    var brr = input[p + 2].toString().split(" ");
    for (var i = 0; i < m; i++) brr[i] = parseInt(brr[i]);
    arr.sort(function (a, b) {
      return a - b;
    });
    brr.sort(function (a, b) {
      return a - b;
    });
    var i = 0,
      j = 0,
      f = 0;
    while (i < n) {
      if (j < m && brr[j] < arr[i]) i++, j++;
      else {
        f = 1;
        break;
      }
    }
    if (f == 0) console.log("YES");
    else console.log("NO");
    p += 3;
  }
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
