var kthDistinct = function (arr, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1 + (obj[arr[i]] || 0);
  }
  const arr2 = [];
  for (let key in obj) {
    if (obj[key] == 1) {
      arr2.push(key);
    }
  }
  if (arr2.length < k) return "";
  return arr2[k - 1];
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
