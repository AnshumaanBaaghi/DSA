function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[1].trim().split(" ").map(Number);
    let dp = new Array(arr.length + 1).fill(undefined);
    console.log(getMinsteps(0, arr, dp));
}

function getMinsteps(currentindex, arr, dp) {
    if (dp[currentindex + 1] !== undefined) {
        return dp[currentindex + 1];
    }
    else if (currentindex >= arr.length - 1) {
        return 0;
    }
    else {
        let cost = Infinity;
        for (let j = currentindex + 1; j <= currentindex + arr[currentindex] && j < arr.length; j++) {
            let newcost = 1 + getMinsteps(j, arr, dp);
            cost = Math.min(cost, newcost);
        }
        dp[currentindex + 1] = cost;
        return dp[currentindex + 1];
    }
}

if (process.env.USERNAME === "poora") {
    runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
}
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
}