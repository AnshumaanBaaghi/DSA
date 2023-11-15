function runProgram(input) {
    // Write code here
   
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`3
    4
    2 2
    5 1
    10 1
    5 4
    4
    6 10
    1 8
    2 6
    10 9
    5
    10 6
    1 9
    3 9
    9 10
    1 10`);
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
      process.exit(0) ;
    });
  }