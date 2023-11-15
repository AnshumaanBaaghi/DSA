/*
Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
*/
var buildArray = function(target, n) {
    let num=1;
    let p =0;
    let stack =[];
    let ans=[];
    while(p<target.length){
        stack.push(num);
        ans.push("Push");
        if(stack[stack.length-1]==target[p]){
            p++;
        }
        else{
            stack.pop();
            ans.push("Pop");
        }
        num++;
    }
    return ans
};
buildArray( [1,3],3)