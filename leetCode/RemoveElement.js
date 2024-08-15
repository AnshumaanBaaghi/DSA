var removeElement = function (nums, val) {
  let count = 0;
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count++;
      continue;
    }
    nums[p++] = nums[i];
  }
  return nums.length - count;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log("nums:", nums);
console.log(removeElement(nums, val));
console.log("nums:", nums);
