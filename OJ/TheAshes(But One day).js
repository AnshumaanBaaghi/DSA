function runProgram(input){
    input = input.trim().split('\n')
    input=input[0].split(" ")
    input[0]=Number(input[0])
    input[1]=Number(input[1])
    
    if(input[0]>input[1])console.log("Australia")
    else if (input[1]>input[0]) console.log("England")
    else if (input[0]==input[1]) console.log("Tie")
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