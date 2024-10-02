const calGP = (n, r) => {
    if (n === 0) return 1;
    return 1 / r ** n + calGP(n - 1, r);
  };
  
  function runProgram(input) {
    const [n, r] = input.split(" ").map(Number);
    let gp = String(calGP(n, r));
    if (gp.indexOf(".") === -1) gp += ".";
    while (gp.split(".")[1].length < 4) gp += "0";
    console.log(Number(gp).toFixed(4));
  }
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