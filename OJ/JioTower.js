function isSafe(n, k, arr, mid) {
    let tower1 = arr[0];
    let tower2 = tower1 + mid + mid;
    let towers = 1;
    
    for (let i = 1; i < n; i++) {
        if (arr[i] > tower2) {
            tower1 = arr[i];
            tower2 = tower1 + mid + mid;
            towers++;
        }
    }
    
    return towers <= k;
}

function solve(n, k, arr) {
    let low = 1,  high = arr[n-1]-arr[0],  ans = Infinity;
    
    while (low <= high) {
        let mid = low + Math.floor((high-low) / 2);
        
        if (isSafe(n, k, arr, mid)) {
            ans = Math.min(ans, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return ans;
}


function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n,k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  arr.sort((a,b) => a-b);
  
  console.log(solve(n, k, arr));
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