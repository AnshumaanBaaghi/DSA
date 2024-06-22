function birthday(s, d, m) {
  // Write your code here
  if (s.length < m) return 0;
  let sum = 0;
  let possibilities = 0;
  for (let i = 0; i < m; i++) {
    sum += s[i];
  }
  sum === d && possibilities++;
  let start = 0;
  let end = m;
  while (end < s.length) {
    sum -= s[start++];
    sum += s[end++];
    sum === d && possibilities++;
  }
  return possibilities;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
