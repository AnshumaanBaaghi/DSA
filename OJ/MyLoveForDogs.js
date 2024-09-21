function runProgram(input){
    // Write code here
    input = input.trim().split("\n")
    let  size = Number(input[0])
    let strength = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b)
    let calorie = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b)
    let ans =0
    for(let i=0;i<strength.length;i++ ){
      ans+= (strength[i]*calorie[i])
    }
    console.log(ans)
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });