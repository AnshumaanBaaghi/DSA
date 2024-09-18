function runProgram(input) {
    input = input.split('\n')[1].split(' ').map(Number)
    var oddSum = 0, evenSum = 0;
    input.forEach(function (element) {
      if (element % 2 == 0) {
        evenSum += element
      } else {
        oddSum += element
      }
    })
  
    if (oddSum > evenSum) {
      console.log("Odd")
    } else {
      console.log("Even")
    }
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });