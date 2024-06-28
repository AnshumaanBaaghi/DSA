var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = -Infinity;
  while (left < right) {
    if (height[left] < height[right]) {
      if (maxWater < (right - left) * height[left]) {
        maxWater = (right - left) * height[left];
      }
      left++;
    } else {
      if (maxWater < (right - left) * height[right]) {
        maxWater = (right - left) * height[right];
      }
      right--;
    }
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
