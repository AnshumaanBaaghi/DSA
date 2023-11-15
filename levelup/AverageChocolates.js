const query = (arr, n, q) => {
    let left =0;
    let right=n-1;
    let ans=0;
    while(left<=right){
        const mid = Math.floor((right+left)/2);
        if(arr[mid]<q){
            ans = mid+1;
            left = mid+1;
        }
        else{
            right = mid-1
        }
    }
    console.log(ans)

}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let N = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number);
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
        arr[i] = (sum / (i + 1));
    }
    let Q = +input[2].trim();
    let line = 3;
    for (let i = 0; i < Q; i++) {
        query(arr, N, +input[line++].trim())
    }

}
if (process.env.USERNAME === "ganum") {
    runProgram(`5
    5 4 3 2 1
    5
    1
    2
    3
    4
    5`);
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