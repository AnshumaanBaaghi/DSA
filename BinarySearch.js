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

const firstOccurenceOfElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === k) {
      ans = mid;
      right = mid - 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("ans:", ans);
};
const lastOccurenceOfElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === k) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
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

const JustGreaterThanElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] > k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log("ans:", ans);
};
const JustSmallerThanElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] < k) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("ans:", ans);
};

const JustGreaterOrEqualThanElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === k) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (ans === -1) {
    let left_1 = 0;
    let right_1 = arr.length - 1;
    while (left_1 <= right_1) {
      let mid = Math.floor((right_1 + left_1) / 2);
      if (arr[mid] > k) {
        ans = mid;
        right_1 = mid - 1;
      } else {
        left_1 = mid + 1;
      }
    }
  }
  console.log("ans:", ans);
};
const JustSmallerOrEqualThanElement = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === k) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (ans === -1) {
    let left_1 = 0;
    let right_1 = arr.length - 1;
    while (left_1 <= right_1) {
      let mid = Math.floor((right_1 + left_1) / 2);
      if (arr[mid] <= k) {
        ans = mid;
        left_1 = mid + 1;
      } else {
        right_1 = mid - 1;
      }
    }
  }
  console.log("ans:", ans);
};

JustSmallerOrEqualThanElement([1, 1, 2, 2, 5], 4);
// LowerBoundInLogn([1, 1, 2, 2, 5], 5, 2);
// binarySearch([1, 3, 5, 7, 9], 5);
