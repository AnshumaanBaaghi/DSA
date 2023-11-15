// function findMinStepsToEmptySequence2(sequence) {
//     const obj={};
//     for(let el of sequence){
//         obj[el] = (obj[el] || 0)+1;
//     }
//     let remaining=0;
//     let count=0;
//     console.log('obj:', obj);
//     for(let key in obj){
//         if(obj[key]%2==1){
//             remaining+=key;
//             count++;
//         }
//     }

//     while (remaining>0) {
//         let max=0;
//         for(let i=0;i<=remaining;i++){
//             const power = Math.pow(2,i);
//             if(power<=remaining){
//                 max = power;
//             }
//             else{
//                 break
//             }
//         }
//         const val = Math.pow(2,max);
//         remaining-= val;
//         count++;
//     }
//     return count
// }

// Example usage
// const sequence = [0,1,2,3];
// const minSteps = findMinStepsToEmptySequence2(sequence);
// console.log('minSteps:', minSteps)
const sequence = [0, 1, 2, 3];
const countObj = {};

sequence.forEach(val => {
    const power = Math.pow(2, val);
    countObj[power] = (countObj[power] || 0) + 1;
});

let count = 0;
let remainingSum = 0;

for (const power in countObj) {
    if (countObj.hasOwnProperty(power)) {
        const occurrences = countObj[power];

        if (occurrences % 2 === 1) {
            remainingSum += Number(power);
            count++;
        }
    }
}

while (remainingSum > 0) {
    const nextPower = Math.pow(2, Math.floor(Math.log2(remainingSum)));
    remainingSum -= nextPower;
    count++;
}

console.log(`Minimum steps required: ${count}`);