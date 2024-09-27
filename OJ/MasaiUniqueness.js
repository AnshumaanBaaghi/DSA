function solve(str){
    let obj = {};
    let ans = "UNIQUE";
    for(let i = 0; i<str.length; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key] > 1){
            ans = "NO";
        }
    }
    console.log(ans);
 }
 
 function runProgram(input) {
   // Write code here
   input = input.trim().split("\n");
   let n = +input[0];
   let line = 1;
   for(let i = 0; i<n; i++){
       let str = input[line++];
       solve(str);
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