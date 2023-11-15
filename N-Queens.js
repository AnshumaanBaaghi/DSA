const possibleWays = (row, n, board,ans) => {
    if (row == n) {
        ans++;
        return ans;
    }
    for (let col = 0; col < n; col++) {
        if (checkPosition(row, col, n, board)) {
            board[row][col] = "Q";
            ans = possibleWays(row + 1, n, board,ans);
            board[row][col] = ".";
        }
    }
    return ans;
}

const checkPosition = (row, col, n, board) => {
    // el to top
    for (let i = row - 1; i >= 0; i--) {
        if (board[i][col] == "Q") {
            return false
        }
    }

    // el to bottom 
    for (let i = row + 1; i < n; i++) {
        if (board[i][col] == "Q") {
            return false
        }
    }

    // el to left
    for (let i = col - 1; i >= 0; i--) {
        if (board[row][i] == "Q") {
            return false
        }
    }

    // el to right
    for (let i = col + 1; i < n; i++) {
        if (board[row][i] == "Q") {
            return false
        }
    }

    // el to top-left
    {
        let tempCol = col - 1;
        let tempRow = row - 1
        while (tempCol >= 0 && tempRow >= 0) {
            if (board[tempRow--][tempCol--] == "Q") {
                return false
            }
        }
    }

    // el to top-right
    {
        let tempCol = col + 1;
        let tempRow = row - 1
        while (tempCol < n && tempRow >= 0) {
            if (board[tempRow--][tempCol++] == "Q") {
                return false
            }
        }
    }

    // el to bottom-left
    {
        let tempCol = col - 1;
        let tempRow = row + 1
        while (tempCol >= 0 && tempRow < n) {
            if (board[tempRow++][tempCol--] == "Q") {
                return false
            }
        }
    }

    // el to bottom-right
    {
        let tempCol = col + 1;
        let tempRow = row + 1
        while (tempCol < n && tempRow < n) {
            if (board[tempRow++][tempCol++] == "Q") {
                return false
            }
        }
    }


    return true
}

const nQueen = (n) => {

    const board = [];
    for(let i=0;i<n;i++){
        board.push(new Array(n).fill("."));
    }
    const m = new Array(n).fill(new Array(n).fill("."));
    console.log(possibleWays(0, n, board,0));

}

nQueen(4);