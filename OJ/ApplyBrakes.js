function runProgram(input){
    // Write code here
  input = input.trim().split(" ").map(Number)
  
  if((input[0] / input[1]) > 40){console.log("Apply Brake")}
  else{console.log("Keep Going")}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});