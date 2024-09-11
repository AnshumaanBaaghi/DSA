let count = 0

function binarySearch(arr, key, lo=0, hi = arr.length-1) {
    let lower_bound = -1
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2) 
        if(arr[mid] >= key) {
            hi = mid - 1
            if(arr[mid] === key) {
                lower_bound = mid
            }
        }
        else {
            lo = mid + 1
        }
    }
    lo = 0, hi = arr.length - 1
    let upper_bound = -1

    while(lo <=hi) {
        let mid = Math.floor(lo + (hi - lo) / 2) 
        if(arr[mid] <= key) {
            lo = mid + 1
            if(arr[mid] === key) {
                upper_bound = mid
            }
        }
        else {
            hi = mid - 1
        }
    }
    if(lower_bound === -1 || upper_bound === -1) {
        return 0
    }
    else {
        return (upper_bound - lower_bound + 1)
    }

}

function processData(input) {
    input = input.trim().split('\n').slice(1).map(Number)
    let leftSide = []
    let rightSide = []

    for(let a = 0; a < input.length; a++) {
        for(let b = 0; b < input.length; b++) {
            for(let c = 0; c < input.length; c++) {
                leftSide.push(input[a] * input[b] + input[c])
            }
        }
    }
  
  leftSide.sort((a,b) => a-b)

    for(let d = 0; d < input.length; d++) {
        for(let e = 0; e < input.length; e++) {
            for(let f = 0; f < input.length; f++) {
                if(input[d] !== 0) {
                    let res = binarySearch(leftSide, (input[f] + input[e])*input[d])
                    count += res
                }
            }
        }
    }

    console.log(count)
}

process.stdin.resume()
process.stdin.setEncoding("ascii")
_input = ""
process.stdin.on("data", function(input) {
	_input += input
})
process.stdin.on("end", function() {
  processData(_input)
})