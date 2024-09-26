function countSub( str ){
    if( str.length == 1 ){
        return 1
    }
    if( str.length <= 0 ){
        return 0
    }
    let left = 0
    let right = str.length-1
    let count = 0
    while( left <= right ){
        if(str[left] == str[right]){
            count++
        }
        left++
    }
    return count+countSub(str.slice(0,right))
}

function runProgram(input){
    // your code goes here
    console.log(countSub(input.trim()))    
    
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});