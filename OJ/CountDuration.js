function runProgram(input) {
    let inp=input.split('\n')
    for(let i=1;i<inp.length;i++){
        let [sh,sm,eh,em] = inp[i].split(' ').map(Number);
        let startTime = sh*60 + sm
        let endTime = eh*60 + em
        d=endTime-startTime
        dm=d%60
        dh=Math.floor(d/60)
        console.log(dh,dm)
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