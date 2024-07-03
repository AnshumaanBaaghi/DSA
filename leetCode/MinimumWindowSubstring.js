var minWindow = function (s, t) {
  const obj = {};
  const tempObj = {};

  for (let i = 0; i < t.length; i++) {
    obj[t[i]] = (obj[t[i]] || 0) + 1;
    tempObj[t[i]] = 0;
  }

  let countLetters = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let minStart = 0;

  while (end < s.length) {
    if (obj[s[end]]) {
      tempObj[s[end]]++;
      if (tempObj[s[end]] <= obj[s[end]]) {
        countLetters++;
      }
    }
    while (countLetters >= t.length) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        minStart = start;
      }
      if (obj[s[start]] !== undefined) {
        if (tempObj[s[start]] <= obj[s[start]]) {
          countLetters--;
        }
        tempObj[s[start]]--;
      }

      start++;
    }

    end++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minStart, minStart + minLength);
};

let s = "ADOBECODEBANC";
let t = "ABC";

console.log(minWindow(s, t));
