function romanNum(n){
    let th=["","M","MM","MMM"]
    let h=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
    let t=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
    let o=["","I","II","III","IV","V","VI","VII","VIII","IX"]
    x=Math.floor(n/1000)
    yh=(n%1000)
    y=Math.floor(yh/100)
    zt=yh%100
    z=Math.floor(zt/10)
    wo=zt%10
    w=Math.floor(wo)
    
    ans=th[x]+h[y]+t[z]+o[w]
    console.log(ans)
}
function runProgram(input) {
  // Write code here
  n=+input
  romanNum(n)
  
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