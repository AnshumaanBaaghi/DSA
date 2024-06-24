var isPalindrome = function (x) {
  if (x < 0) return false;
  let num = x;
  let reverseNumber = 0;
  while (num > 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverseNumber === x;
};
console.log(isPalindrome(0));
