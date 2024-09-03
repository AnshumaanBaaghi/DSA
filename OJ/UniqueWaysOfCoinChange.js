function runProgram(input){
    input = input.split("\n")
    const [target, numCoins] = input[0].split(" ").map(Number)
    const coins = input[1].split(" ").map(Number)

    let cache = new Array(numCoins).fill().map(row => new Array(target).fill(-1))
    numOfWays(0, 0)
   
    console.log(cache[0][0])
    function numOfWays (i, total) {
      
      if (i >= numCoins) return 0;
      if (total === target) return 1;

      if (cache[i][total] != -1) {
        return cache[i][total]
      };


      let a = 0, b = 0

      if (total + coins[i] <= target) {
        a = numOfWays(i, total + coins[i])
      }

      b = numOfWays(i + 1, total)
      return cache[i][total] = a + b
        
    }

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
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});