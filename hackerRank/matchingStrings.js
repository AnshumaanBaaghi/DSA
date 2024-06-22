function matchingStrings(stringList, queries) {
  // Write your code here
  const obj = {};
  const ans = [];
  for (let str of stringList) {
    obj[str] = (obj[str] || 0) + 1;
  }
  for (let query of queries) {
    ans.push(obj[query] || 0);
  }
  return ans;
}
console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
