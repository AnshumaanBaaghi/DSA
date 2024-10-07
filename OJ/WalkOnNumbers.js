function runProgram(input) {
    input = input.trim().split('\n')
    let mSize = Number(input[0])
    let nSize = Number(input[2])
    let m = input[1].trim().split(' ').map(Number)
    let n = input[3].trim().split(' ').map(Number)

    if(mSize < nSize){
        [mSize, nSize] = [nSize, mSize]
        temp = [...m]
        m = [...n]
        n = [...temp]
    }

    // console.log(search(n, 100, nSize))

    let inter = []
    for(let i=0; i<mSize; i++){
        let s = search(n, m[i], nSize)
        if(s !== -1){
            inter.push([i, s])
            // console.log(m[i])
        }
    }

    let mPrev = 0
    let nPrev = 0
    let total = 0
    for(let i=0; i<inter.length; i++){
        let mInt = inter[i][0]
        let nInt = inter[i][1]

        let subM = m.slice(mPrev, mInt).reduce((a, c) => a + c, 0)
        let subN = n.slice(nPrev, nInt).reduce((a, c) => a + c, 0)

        total += subM > subN ? subM : subN
        total += m[mInt]

        mPrev = mInt + 1
        nPrev = nInt + 1

        if(i === inter.length - 1){
            let temp1 = m.slice(mPrev).reduce((a, c) => a + c, 0)
            let temp2 = n.slice(nPrev).reduce((a, c) => a + c, 0)

            total += temp1 > temp2 ? temp1 : temp2
        }
    }

    console.log(total)

    // console.log(inter)

    // console.log(mSize, m, nSize, n)
}

function search(arr, num, n){
    let lo = 0, hi = n-1

    while(lo <= hi){
        let mid = Math.floor(lo + (hi-lo)/2)
        if(arr[mid] === num){
            return mid
        }
        else if(arr[mid] < num){
            lo = mid + 1
        }
        else{
            hi = mid - 1
        }
    }
    return -1
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