
function runProgram(input) {
    const [str1, str2] = input.split("\n").map((e) => e.split(""));

    const str1Count = countCharInStr(str1);
    const str2Count = countCharInStr(str2);

    for (const char in str1Count) {
        if (str1Count[char] != str2Count[char]) {
            console.log("No");
            return;
        }
    }

    console.log("Yes");

    function countCharInStr(str) {
        const count = {};
        str.forEach((e) => {
            if (count[e]) {
                count[e] += 1;
            } else {
                count[e] = 1;
            }
        });
        return count;
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});