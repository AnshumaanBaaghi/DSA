function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let tc = +input[0];
    let line = 1
    
    for(let i=0;i<tc;i++){
        
        let [a,b,c,n] = input[line++].split(" ").map(Number);
        treasure(a,b,c,n)
    }
  }
  
  function treasure(a,b,c,n){
      
      let totalCoins = a+b+c+n
      
      let maxCoin = Math.max(a,b,c)
      
      
      if (totalCoins % 3 === 0 && totalCoins / 3 >= maxCoin) {
          console.log('Yes');
      } else {
          console.log('No');
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