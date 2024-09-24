function runProgram(input) {
    // Write code here
    // Split the input into lines
    let lines = input.split('\n');
    
    // First line contains the prices of 4 phones
    let prices = lines[0].split(' ').map(Number);
    
    // Second line contains the quantities of each phone you need to buy
    let quantities = lines[1].split(' ').map(Number);
    
    // Set the available money
    const totalMoney = 150000;
    
    // Calculate the total cost
    let totalCost = 0;
    for (let i = 0; i < prices.length; i++) {
      totalCost += prices[i] * quantities[i];
    }
    
    // Compare the total cost with available money
    if (totalCost <= totalMoney) {
      console.log("Possible");
    } else {
      console.log("Not Possible");
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