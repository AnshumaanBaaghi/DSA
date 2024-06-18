function runProgram(input) {
  // Write code here
  // let arr=input.trim().split("\n");
  // let cases=arr.slice(1).map(line=>line.split("").map(Number));
  // let out=cases.map(([N,K])=>{
  //    sol(N,K)
  // });
  // for(let output of out){
  //     console.log(output);
  // }
  /*
   input =  `   1    
            5 8    `
    */
  input = input.trim().split("\n");
  /*
     trim();
   input =  `1    
            5 8`
    */
  /*
     split();
   input =  ['2','5 8','4 10']
    */
  const tc = +input[0].trim();
  let line = 1;
  //    line=3
  for (let i = 0; i < tc; i++) {
    // i=1
    // line=3
    const [n, k] = input[line].trim().split(" ").map(Number);
    line++;
    // line=4;
    const arr = input[line].trim().split(" ").map(Number);
    line++;
    fun(n, k, arr);
  }
}

function dist(w, c) {
  let distributed = 0;
  for (let d = 0; d < c; d++) {
    distributed = distributed + Math.min(w, d + 1);
  }
  return distributed;
}
function sol(N, K) {
  console.log("N,K:", N, K);
  // N=0;
  // K =0
  let min = 0;
  let max = K;
  while (max - min > 1) {
    let mid = Math.floor((max + min) / 2);
    let distributed = dist(mid, N);
    if (distributed <= K) {
      min = mid;
    } else {
      max = mid;
    }
  }
  return min;
}

if (process.env.USERNAME === "ganum") {
  runProgram(`2
    5 8
    4 10 78 4398 989
    5 10
    4 10 78 43 9`);
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
