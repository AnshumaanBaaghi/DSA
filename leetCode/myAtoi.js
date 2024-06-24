var myAtoi = function (s) {
  s = s.trim();
  let str = "";
  let isNegative = false;
  for (let i = 0; i < s.length; i++) {
    if (i == 0 && (s[i] == "+" || s[i] == "-")) {
      if (s[i] == "-") isNegative = true;
      continue;
    }
    if (isNaN(s[i]) || s[i] == " ") break;
    str += s[i];
  }
  console.log("str:", str);
  let num = Number(str);
  if (isNegative && num !== 0) num = -num;

  if (num < -2147483648) return -2147483648;
  if (num > 2147483647) return 2147483647;
  return num;
};

console.log(myAtoi("   +0 123"));
console.log(isNaN("*"));
