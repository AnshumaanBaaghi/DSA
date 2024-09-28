function processData(input) {
    input = input.split("\n")
    var size = []
    size = input.shift()
    var stack = []
    
    for(var i = 0 ; i < input.length ;i++){
        input[i] = input[i].split(" ").map(Number)
        if(input[i][0] === 1){
            if(stack.length === 0){
                console.log("No Food")
            }
            else{
                console.log(stack[stack.length-1])
                stack.pop()
            }
        }
        else{
            stack.push(input[i][1])
        }
       
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});