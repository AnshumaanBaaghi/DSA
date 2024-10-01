function runProgram(input){
    var input=input.trim().split("\n");
    //console.log(input);
    var dimensions = input[0].split(" ");
    var input_dimensions=input[1].split(" ");
    var Length = Number(dimensions[0]);
    var width = Number(dimensions[1]);
    var input_L=Number(input_dimensions[0]);
    var input_W=Number(input_dimensions[1]);
    if(input_L > Length && input_W> width) {
        console.log("Upload");
    } 
    else if(input_L < Length) {
        console.log("Increase Length");
    } 
    else {
        console.log("Increase Width");
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
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});