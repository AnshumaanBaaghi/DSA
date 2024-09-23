function runProgram(input){ 
    input = input.trim().split("\n")
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(e=>+e.split(':').join("")).sort((a,b)=>a -b)
    let dep = input[2].trim().split(" ").map(e=>+e.split(':').join("")).sort((a,b)=>a -b)
    // console.log(arr,dep)
    check(n,arr,dep)
}
function check(n,arr,dep){
    let i = 0
    let j = 0
    let count = 0
    let max = -1
    
    while(i<n && j<n){
      if(arr[i] < dep[j]){
        i++
        count++
        max  = Math.max(count,max)
    }
    else{
        if(count>0) count--
        j++
    }  
    }
    console.log( max)
    
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