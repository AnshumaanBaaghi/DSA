/*
const maze = (n, grid, row, col, str,ans) => {
    if (row == n - 1 && col == n - 1) {
        grid[row][col] == 1 && ans.push(str);
        return ans;
    }
    if (row < 0 || row >= n || col < 0 || col >= n || grid[row][col] == 0) {
        return ans;
    }
    grid[row][col] = 0
    maze(n, grid, row + 1, col, str + "D",ans);
    maze(n, grid, row - 1, col, str + "U",ans);
    maze(n, grid, row, col + 1, str + "R",ans);
    maze(n, grid, row, col - 1, str + "L",ans);
    grid[row][col] = 1;
    return ans;
}


function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let N = +input[0].trim()
   let grid =[];
   let line=1;
   for(let i=0;i<N;i++){
       let arr = input[line++].trim().split(' ').map(Number);
       grid.push(arr);
   }
   const ans = maze(N, grid, 0, 0, "",[]);
   console.log(ans.length?ans.sort().join(" "):-1);
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`4
    1 0 0 0
    1 1 0 1
    1 1 1 0 
    0 1 1 1`);
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

  */

const maze = (n, grid, row, col, str, ans, memo) => {
  if (row == n - 1 && col == n - 1) {
    grid[row][col] == 1 && ans.push(str);
    return ans;
  }

  if (row < 0 || row >= n || col < 0 || col >= n || grid[row][col] == 0) {
    return ans;
  }

  if (memo[row][col]) {
    return ans;
  }

  grid[row][col] = 0;

  maze(n, grid, row + 1, col, str + "D", ans, memo);
  maze(n, grid, row - 1, col, str + "U", ans, memo);
  maze(n, grid, row, col + 1, str + "R", ans, memo);
  maze(n, grid, row, col - 1, str + "L", ans, memo);

  grid[row][col] = 1;
  memo[row][col] = true;
  return ans;
};

// Example usage
const n = 4;
const grid = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]];
const row = 0;
const col = 0;
const str = "";
const ans = [];
const memo = new Array(n).fill(false).map(() => new Array(n).fill(false));
const result = maze(n, grid, row, col, str, ans, memo);
console.log("All possible paths:", result);
