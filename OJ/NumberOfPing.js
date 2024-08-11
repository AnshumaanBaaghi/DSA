function runProgram(input) {
  input = input.trim().split("\n");
  for (var i = 2; i < input.length; i = i + 2) {
    var line = input[i];
    var count = 0;
    var m = 0,
      o = 0,
      u = 0,
      s = 0;
    for (var j = 0; j < line.length; j++) {
      if (line[j] == "p") {
        m++;
      } else if (line[j] == "i") {
        o++;
      } else if (line[j] == "n") {
        u++;
      } else if (line[j] == "g") {
        s++;
      }
    }
    // console.log(m+" "+o+" "+u+" "+s+" "+e);
    var min = Math.min(m, o, u, s);
    console.log(min);
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
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
