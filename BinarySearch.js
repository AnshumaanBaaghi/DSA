const binarySearch = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = 0;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] > k) {
      right = mid - 1;
      ans = mid;
    } else left = mid + 1;
  }
  console.log("ans:", ans);
};

const LowerBoundInLogn = (arr, n, k) => {
  let i = 0;
  let j = n - 1;
  let res = -1;
  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);

    if (arr[m] == k) {
      res = m;
      j = m - 1;
    } else if (arr[m] < k) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  console.log(res);
};
LowerBoundInLogn([1, 1, 2, 2, 5], 5, 2);
binarySearch([1, 3, 5, 7, 9], 5);
