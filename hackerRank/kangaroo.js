function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x1 > x2 && v1 >= v2) return "NO";
  else if (x2 > x1 && v2 >= v1) return "NO";

  x1 += v1;
  x2 += v2;
  while (x1 <= 10000 && x2 <= 10000) {
    if (x1 == x2) {
      return "YES";
    }
    x1 += v1;
    x2 += v2;
  }
  return "NO";
}
console.log(kangaroo(0, 2, 5, 3));
