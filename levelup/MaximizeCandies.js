function solve(n, m, matx, bob_i, bob_j, shop_i, shop_j) {
    const maximumCandies = (n, m, mat, row, col, shop_i, shop_j, count, ans) => {
        if (row === shop_i && col === shop_j) {
            ans = Math.max(ans, count);
            return ans;
        }
        if (row < 0 || row >= n || col < 0 || col >= m || mat[row][col] === 0) {
            return ans;
        }
        mat[row][col] = 0;
        let a = Math.max(maximumCandies(n, m, mat, row + 1, col, shop_i, shop_j, count + 1, ans),
            maximumCandies(n, m, mat, row - 1, col, shop_i, shop_j, count + 1, ans),
            maximumCandies(n, m, mat, row, col + 1, shop_i, shop_j, count + 1, ans),
            maximumCandies(n, m, mat, row, col - 1, shop_i, shop_j, count + 1, ans));
        mat[row][col] = 1;
        return a;
    }
    console.log(maximumCandies(n, m, matx, bob_i, bob_j, shop_i, shop_j, 0, -1));
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let [N, M] = input[0].trim().split(' ').map(Number)
    let line = 1;
    let mat = [];
    for (let i = 0; i < N; i++) {
        let arr = input[line++].trim().split(' ').map(Number)
        mat.push(arr);
    }
    const [row, col] = input[line++].trim().split(' ').map(Number)
    const [t_row, t_col] = input[line++].trim().split(' ').map(Number)
    solve(N, M, mat, row, col, t_row, t_col)
}
if (process.env.USERNAME === "ganum") {
    runProgram(`3 10
    1 1 1 1 1 1 1 1 1 1
    1 1 0 1 1 0 1 1 0 1
    1 1 1 1 1 1 1 1 1 1
    0 0
    1 7`);
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