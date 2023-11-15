const numberOfStone=(box)=>{
    let left =0;
    let right = box.length-1;
    let leftSum=box[left];
    let rightSum=box[right];
    let max = 0;
    while(left<right){
        if(leftSum==rightSum){
            max = Math.max(leftSum,max);
            left++;
            right--;
            leftSum+=box[left]
            rightSum+=box[right]
        }
        else if(leftSum<rightSum){
            left++
            leftSum+=box[left]
        }
        else{
            right--;
            rightSum+=box[right]
        }
    }
    console.log(max);
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let tc = +input[0].trim()
    let line = 1;
    for (let i = 0; i < tc; i++) {
        let N = +input[line++].trim()
        let arr = input[line++].trim().split(' ').map(Number)
        numberOfStone(arr)
    }
}
if (process.env.USERNAME === "ganum") {
    runProgram(`3
    4
    3 7 6 7
    7
    2 7 4 7 6 3 6
    3
    2 7 2`);
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