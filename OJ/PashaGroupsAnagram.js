function runProgram(input) {
    // Write code here
    input  =input.split("\n");
    let tc  =+input[0];
    let line =1;
    for(let i=0; i<tc  ; i++){
        let n =+input[line++];
        let arr  =[]
        for(let j=0;j<n ; j++){
            arr.push(input[line++])
            
        }
        pashaGroupsAnagram(n,arr)
    }
    
  }
  function pashaGroupsAnagram(n,arr){
      // console.log(n,arr)
       let obj = {}
       for(let i=0;i<n;i++){
          let a=arr[i]
          let b=a.split("").sort().join("")
          
          
          if(obj[b]===undefined){
              obj[b] = [a]
              // console.log(obj)
          }else{
              obj[b].push(a)
          }
          
      }
      // console.log(obj)
      for(var key in obj){
          console.log(obj[key].length)
          // console.log(key)
          for(let j=0; j<obj[key].length ;j++){
              console.log(obj[key][j])
          }
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