function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let k = input[0].trim();
    let arr = input[1].trim().split(" ").map(Number);
    let dep = input[2].trim().split(" ").map(Number);
     logic(arr,dep,k)?console.log('Possible'):console.log('Not Possible');
    
  }  
  
  
  
         function logic(arr,dep,k){
             let slots=0;
             let i=0;
             let j=0;
             while(slots<=k && i<arr.length && j<dep.length){
                 if(arr[i]<dep[j]){
                     slots++
                     i++
                     
                     if(slots>k) return false;
                 }else{
                    slots--
                    j++;
                 }
             }
             return true;
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