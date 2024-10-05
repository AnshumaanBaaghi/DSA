function runProgram(input) {
    input = input.split('\n');
    for(i=1;i<input.length;){
        let p2 = input[i].split(' ').map(Number);
        let n=+p2[0];
        let m=+p2[1];
        let mat=[];
        for (let j = 1;j <= n; j++) {
            mat.push(input[i+j].split(' ').map(Number));
        }
        i+=n+1;
        const dis = solveMat(mat);
        console.log(dis);
    }
}

function solveCell(mat, i, j, dp) {
    const n = mat.length;
    const m = mat[0].length;
    
    if (j >= m || j < 0 || i >= n || i < 0)
        return 0;
        
    if (dp[i][j] !== -1)
        return dp[i][j];
        
    if (i === n - 1)
        return mat[i][j];
    
    dp[i][j] = mat[i][j] +
           Math.max(
               Math.max(
                   solveCell(mat, i + 1, j, dp),
                   solveCell(mat, i + 1, j + 1, dp)),
               solveCell(mat, i + 1, j - 1, dp));
    
    return dp[i][j];
}

function solveMat(mat) {
    const n = mat.length;
    const m = mat[0].length;
    let result = 0;
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(-1));
    for (let j = 0; j < m; j++) {
        const res = solveCell(mat, 0, j, dp);
        result = Math.max(res, result);
    }
    return result;
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