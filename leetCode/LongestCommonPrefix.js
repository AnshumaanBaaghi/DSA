const longestCommonPrefix = (strs) => {
  let str = "";
  for (let i = 0; i < strs[0].length; i++) {
    let flag = false;
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) return str;
    }
    str += strs[0][i];
  }
  return str;
};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
