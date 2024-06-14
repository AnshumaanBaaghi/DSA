function timeConversion(s) {
  // Write your code here
  if (s[8] === "P") {
    return s.substring(0, 2) == "12"
      ? s.substring(0, 8)
      : +s.substring(0, 2) + 12 + s.substring(2, 8);
  }
  return s.substring(0, 2) == "12"
    ? "00" + s.substring(2, 8)
    : s.substring(0, 8);
}
