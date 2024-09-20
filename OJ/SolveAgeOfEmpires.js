function runProgram(input) {
    input = input.trim().split("\n");
    let array = input[1].trim().split(" ").map(Number);
     array = array.sort(function(a,b){return a - b})
    let sum=0;
 
    for (let i=0; i<array.length; i+=2){
         sum+= array[i]
    }
    console.log(sum)
    
   }
   if (process.env.USERNAME === "") {
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