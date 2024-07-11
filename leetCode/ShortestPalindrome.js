var shortestPalindrome = function (s) {
  const isPalindrome = (end) => {
    let left = 0;
    let right = end;
    while (left < right) {
      if (s[left++] !== s[right--]) return false;
    }
    return true;
  };
  let str = "";
  for (let i = s.length - 1; i > 0; i--) {
    if (isPalindrome(i)) break;
    str += s[i];
  }
  return str + s;
};

console.log(shortestPalindrome("dcbd"));
