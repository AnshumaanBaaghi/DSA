function find(n,m,nums){
    const counter = {};
   let total = 0;
 
   for (let i = 0; i < n; i++) {
     const num = nums[i];
     counter[num] = (counter[num] || 0) + 1;
     if (counter[num] > 1) {
       total += (counter[num] - 1);
     }
   }
 
   const results = [];
   for (let i = 0; i < n; i++) {
     const num = nums[i];
     results.push(total - (counter[num] - 1));
   }
 
   return results;
 }
 function runProgram(input) {
   // Write code here
   input=input.trim().split("\n")
   let line=0
   var [n,m]=input[line++].trim().split(" ").map(Number)
   var arr=input[line++].trim().split(" ").map(Number)
   //console.log(n,m,arr)
 //   console.log(find(n,m,arr).join("\n"))
   const results = find(n, m, arr);
 console.log(results.join("\n"));
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