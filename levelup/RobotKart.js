const robertkart = (n, m, grid, r1_i, r1_j, r2_i, r2_j) => {
    let sum1 = 0;
    if (r1_i >= n || r1_j >= m || r1_j < 0) {
        sum1 = 0;
    }
    else {
        const temp = grid[r1_i][r1_j];
        grid[r1_i][r1_j] = 0;
        sum1 = Math.max(robertkart(n, m, grid, r1_i + 1, r1_j - 1, r2_i, r2_j),
            robertkart(n, m, grid, r1_i + 1, r1_j, r2_i, r2_j),
            robertkart(n, m, grid, r1_i + 1, r1_j + 1, r2_i, r2_j));
        sum1 += temp;
        grid[r1_i][r1_j] = temp;
    }
    let sum2 = 0;
    if (r2_i >= n || r2_j >= m || r2_j < 0) {
        sum2 = 0;
    }
    else {
        const temp = grid[r2_i][r2_j];
        grid[r2_i][r2_j] = 0;
        sum2 = Math.max(robertkart(n, m, grid, r1_i, r1_j, r2_i + 1, r2_j - 1),
            robertkart(n, m, grid, r1_i, r1_j, r2_i + 1, r2_j),
            robertkart(n, m, grid, r1_i, r1_j, r2_i + 1, r2_j + 1));
        sum2 += temp;
        grid[r2_i][r2_j] = temp;
    }
    return Math.max(sum1, sum2)
}
const solve = (n, m, grid) => {
    console.log(robertkart(n, m, grid, 0, 0, 0, m - 1));
}
solve(3, 4, [
    [3, 2, 2, 1],
    [6, 2, 3, 4],
    [4, 7, 6, 8]
])

