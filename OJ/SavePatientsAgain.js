function find(arr, amount) {
	let low = 0,
		high = amount;
	let ans = 0;
	while (low <= high) {
		let mid = low + parseInt((high - low) / 2);
		if (predicate(arr, amount, mid)) {
			ans = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return ans;
}

function predicate(arr, amount, mid) {
	let curAmount = 0;
	for (let i = 0; i < arr.length; i++) {
		let req = arr[i][0] * mid - arr[i][1];
        if (req <= 0) continue;
        let min = Infinity;
        let j = Math.ceil(req / arr[i][3])
        let k = 0
        while(k<=j){
            let a2 = k * arr[i][3];
            let newReq = req - k* arr[i][2];
            if( newReq > 0 ){
                a2 += Math.ceil(newReq/arr[i][4]) * arr[i][5]
            }
            k++
            min = Math.min(a2, min)
        }
        
        curAmount+= min
	}

	return curAmount <= amount;
}
function runProgram(input) {
	const lines = input.split("\n");
	let l = 0;
	let [n, amount] = lines[l++].trim().split(" ").map(Number);
	let arr = [];
	let j = n;
	while (j--) {
		arr.push(lines[l++].trim().split(" ").map(Number));
	}

	console.log(find(arr, amount));
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