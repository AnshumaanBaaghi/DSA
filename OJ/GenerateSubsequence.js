const generateSub=(str,n,ans,i,set)=>{
    console.log(ans)
    if(i==n){
        ans!=""&& set.add(ans)
        return ;
    }

    generateSub(str,n,ans+str[i],i+1,set);

    generateSub(str,n,ans,i+1,set);
    return;
}
const set = new Set();
generateSub("aab",3,"",0,set);
const arr = Array.from(set);
arr.sort();
console.log('arr:', arr)