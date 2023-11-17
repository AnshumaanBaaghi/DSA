

class TwoPointer {
    constructor() { }

    minPairSum(nums) {
        nums.sort((a,b)=>a-b);
        let left=0;
        let right = nums.length-1;
        let max = -Infinity;
        while(left<right){
            max = Math.max(max,nums[left++]+nums[right--])
        }
        return max;

    };

}
const TwoPointerMethods = new TwoPointer();

console.log(TwoPointerMethods.minPairSum([3,5,4,2,4,6]));
