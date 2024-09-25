function processData(input) {
    //Enter your code here
    
    input = input.split('');
    // console.log("input", input);
    
    var result = "";
    
    for ( var  i = 0; i < input.length; i++ ) {
        
        
        // var result = "";
        
        if ( input[i] >= "A" ) {
            // console.log( "Char", input[i] );
                if ( Number(input[i + 1] > 0) ) {
                    // console.log( "Number", input[i + 1] );
                    
                    for ( var j = 0; j < Number( input[i + 1] ); j++ ) {
                        
                        result = result + input[i] ;
                    }          
        }
            
        }
        
    }
    
                    console.log( result);
    
    
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