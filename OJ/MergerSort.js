let count=1;
let count2=1;

const mergerArray=(leftArray,rightArray)=>{
    count2++;
    let p1 = 0;
    let p2 = 0;
    const newArray=[];
    while(p1<leftArray.length && p2<rightArray.length){
        if(leftArray[p1]<rightArray[p2]){
            newArray.push(leftArray[p1]);
            p1++;
        }
        else{
            newArray.push(rightArray[p2]);
            p2++;
        }
    }
    if(p1<leftArray.length){
        newArray.push(leftArray[p1]);
            p1++;
    }
    else if(p2<rightArray.length){
        newArray.push(rightArray[p2]);
        p2++;
    }
    return newArray;
}

const mergeSort=(arr)=>{
    count++;
    if(arr.length<=1){
        return arr
    };
    const  mid = Math.floor(arr.length/2)
    const leftArray = mergeSort(arr.slice(0,mid))
    const rightArray = mergeSort(arr.slice(mid))
    
    return mergerArray(leftArray,rightArray)
}
let arr=[];
for(let i=0;i<100;i++){
    arr.push(i)
}
console.log(mergeSort(arr));
console.log('count:', count)
console.log('count2:', count2)