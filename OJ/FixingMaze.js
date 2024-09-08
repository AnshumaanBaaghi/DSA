let fs=require('fs');
let input=fs.readFileSync(0,'utf8');
// console.log(input)
input=input.trim().split("\n")

let test_cases=input[0];

let line=1;

for(let i=0;i<test_cases;i++){
    
    let [row,col]=input[line++].trim().split(" ").map(Number);
    
    let matrix=[];
        for(let j=0;j<row;j++){
            let mat_row=input[line++].trim().split("")
            matrix.push(mat_row)
        }
    let count=0;
    // console.log(matrix)
    for(let k=0;k<row;k++){
        if(matrix[k][col-1]=='R'){
            count++;
        }
    }
    for(let k=0;k<col;k++){
        if(matrix[row-1][k]=='D'){
            count++;
        }
    }
    console.log(count)
}