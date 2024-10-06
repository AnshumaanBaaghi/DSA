function runProgram(input) {
    input = input.split('\n');
    // for(i=1;i<input.length;){
        let p2 = input[0].split(' ').map(Number);
        let n=+p2[0];
        let m=+p2[1];
        let boxes=input[1].split(' ').map(Number);
        let trucks=input[2].split(' ').map(Number);
        const dis = solve(boxes,trucks);
        console.log(dis);
    // }
}

function check(boxes, trucks, val) {
    let x = 0;
    let y = 0;
    while (x < trucks.length) {
        for (let i = 0; i < val && y < boxes.length && trucks[x] >= boxes[y]; i += 2) y++;
        x++;
    }
    return y === boxes.length;
}

function solve(boxes, trucks) {
    boxes.sort((a, b) => a - b);
    trucks.sort((a, b) => a - b);
    let low = 1;
    let high = 2 * boxes.length - 1;
    let ans = 0;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (check(boxes, trucks, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
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