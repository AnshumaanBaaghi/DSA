function runProgram(input) {
	let arr = input.split('\n')[1].trim().split(' ').map(Number);
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] >= arr[i]) {
			arr[i + 1] = arr[i + 1] - arr[i];
			arr[i] = 0;
		}

		if (arr[i] == 0) count++;
	}

	count == arr.length ? console.log('YES') : console.log('NO');
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