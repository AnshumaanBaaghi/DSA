var containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  for (let i = 0; i <= k && i < nums.length; i++) {
    if (obj[nums[i]]) return true;
    obj[nums[i]] = 1;
  }
  let start = 0;
  let end = k + 1;
  while (end < nums.length) {
    delete obj[nums[start]];
    if (obj[nums[end]]) return true;
    obj[nums[end]] = 1;
    start++;
    end++;
  }
  return false;
};

let nums = [1, 2, 3, 4, 5, 2, 5, 1];
let k = 1;
console.log(containsNearbyDuplicate(nums, k));
