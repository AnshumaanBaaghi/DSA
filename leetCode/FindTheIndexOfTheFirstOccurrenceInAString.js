var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  let window1 = "";
  for (let i = 0; i < needle.length; i++) {
    window1 += haystack[i];
  }
  if (window1 == needle) return 0;
  let prefix = "";
  let start = 0;
  let end = needle.length;
  while (end < haystack.length) {
    prefix += haystack[start++];
    window1 += haystack[end++];

    if (window1 === prefix + needle) return start;
  }
  return -1;
};
let haystack = "leetcode",
  needle = "leeto";

console.log(strStr(haystack, needle));
