function manage(n,x,y,a,b){
    a.sort((a,b) => (a-b));
    b.sort((a,b) => (a-b));
    
    let ans = 0;
    for(let i = 0; i<n; i++){
        if(a[i] <= b[i]){
            ans += (b[i] - a[i]) * x;   
        }else{
            ans += (a[i] - b[i]) * y;
        }
    }
    console.log(ans)
}



function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  let l = 1;
  for(let i = 0; i<t; i++){
      let n = +input[l++];
      let x = +input[l++];
      let y = +input[l++];
      let a = [];
      let b = [];
      for(let j = 0; j<n; j++){
          let [d,e] = input[l++].trim().split(" ").map(Number);
          a.push(d);
          b.push(e);
      }
      manage(n,x,y,a,b)
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