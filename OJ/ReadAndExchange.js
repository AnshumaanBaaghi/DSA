function runProgram(input) {
    input=input.trim().split("\n");
    let line = 0
    let n =   +input[line++].trim();     
    let arr =  input[line++].trim().split(" ").map(Number)
   console.log(minimumTotalTimeToReadBooks(arr, n))
 }
 
function minimumTotalTimeToReadBooks(books, n) {
 // Sort the books in non-increasing order of their reading time
 let max = 0
 let sum = 0;
 for(let el of books){
     sum+=el
     max = Math.max(max, el)
 }
 return Math.max(2*max, sum)

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