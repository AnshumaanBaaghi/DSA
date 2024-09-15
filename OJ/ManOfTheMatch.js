function runProgram(input) {
    input = input.split("\n");
    for (let i = 1; i < input.length; i += 2) {
      let runs = input[i + 1].split(" ").map(Number);
      getResult(runs);
    }
  }
  function getResult(runs) {
    let currentPlayer = "AB";
    let AB_RUNS = 0;
    let VK_RUNS = 0;
    for (let i = 0; i < runs.length; i++) {
      if (currentPlayer === "AB") {
        AB_RUNS += runs[i];
      }
      if (currentPlayer === "VK") {
        VK_RUNS += runs[i];
      }
      if ((i + 1) % 6 == 0) {
        if (currentPlayer === "VK") currentPlayer = "AB";
        else if (currentPlayer === "AB") currentPlayer = "VK";
      }
      if (runs[i] == 1) {
        if (currentPlayer === "VK") currentPlayer = "AB";
        else if (currentPlayer === "AB") currentPlayer = "VK";
      }
      if (runs[i] == 3) {
        if (currentPlayer === "VK") currentPlayer = "AB";
        else if (currentPlayer === "AB") currentPlayer = "VK";
      }
    }
    if (AB_RUNS > VK_RUNS) {
      console.log("AB de Villiers");
    } else if (VK_RUNS > AB_RUNS) {
      console.log("Virat Kohli");
    } else {
      console.log("Tie");
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