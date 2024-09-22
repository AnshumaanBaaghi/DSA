function runProgram(input) {
	input = input.trim().split('\n').map(Number);
	let n = input[0];
	input.shift();
	arr = new Array(n).fill(1);
	// console.log(n, input, arr);

	for (let i = 1; i < n; i++) {
		if (input[i] > input[i - 1]) {
			arr[i] = arr[i - 1] + 1;
			// console.log(arr);
		} else if (input[i] <= input[i - 1] && arr[i] >= arr[i - 1]) {
			let j = i - 1;
			while (input[j] > input[j + 1] && arr[j] <= arr[j + 1] && j >= 0) {
				// console.log('inside while', i);
				// check later
				arr[j] = arr[j] + 1;
				// console.log(arr);
				j--;
			}
		}
	}

	console.log(arr.reduce((a, c) => a + c, 0));
}
if (process.env.USERNAME === '') {
	runProgram();
} else {
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	let read = '';
	process.stdin.on('data', function(input) {
		read += input;
	});
	process.stdin.on('end', function() {
		read = read.replace(/\n$/, '');
		read = read.replace(/\n$/, '');
		runProgram(read);
	});
	process.on('SIGINT', function() {
		read = read.replace(/\n$/, '');
		runProgram(read);
		process.exit(0);
	});
}