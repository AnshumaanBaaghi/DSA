const Anagrams=(str)=>{
    const N= str.length;
    const obj={};
    for(let i=0;i<N;i++){
        let subString = '';
        for(let j=i;j<N;j++){
            subString+=str[j];
            let a = subString.split("").sort().join("");
            obj[a] = (obj[a]||0)+1;
        }
    }

    let ans=0;
    for(let key in obj){
        if(obj[key]>1){
            ans+= (obj[key]*(obj[key]-1))/2;
        }
    }
    console.log('ans:', ans);
}
function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let tc = +input[0].trim()
   let line=1;
   for(let i=0;i<tc;i++){
       let str = input[line++].trim();
       Anagrams(str)
    }
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`2
    abba
    abcd`);
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
      process.exit(0) ;
    });
  }