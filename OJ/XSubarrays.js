function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (let k = 1; k < input.length; k++) {
        let [size, K, X] = input[k].trim().split(" ").map(Number);
        let arr = input[k + 1].trim().split(" ").map(Number);
        let start = 0;
        let end = 0;
        let count = 0;
        while (start <= (arr.length - X)) {
            // 1 3 2 5 1
            let len = (end - start) + 1;
           // console.log(len, start, end);
            if (len === X && arr[end] <= K) {
                count++;
                start++;
            }
            else {
                if (arr[end] <= K) {
                    end++;
                }
                else {
                    if (start === end) {
                        start++;
                        end++;
                    }
                    else {
                        start++;
                    }
                }
            }
        }
        console.log(count);
        k++
    }

}

if (process.env.USERNAME === "") {
    runProgram(``)
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