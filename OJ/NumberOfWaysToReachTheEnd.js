function solve(n,points,eng){
    let ans = 0;
    let need = 100000-points[n-1];
    if(eng[n-1]>=need){
        ans++;
        need=0;
    }else{
        need-=eng[n-1]
    }
    for(let i=n-2;i>=0;i--){
       need += points[i+1]-points[i];
        if(eng[i]>=need){
            ans++;
            need=0;
        }else{
            need-=eng[i];
        }
    }
    console.log(ans);
}

function runProgram(input){
  input = input.trim().split('\n');
  let t = +input[0];
  let line = 1;
  while(t-->0){
      let n = +input[line++];
      let points = input[line++].trim().split(' ').map(Number);
      let eng = input[line++].trim().split(' ').map(Number);
      solve(n,points,eng);
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