function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applesPoints = apples.map((el) => a + el);
  const applesOnHouse = applesPoints.reduce((acc, el) => {
    el >= s && el <= t && (acc += 1);
    return acc;
  }, 0);

  const orangesPoints = oranges.map((el) => b + el);
  const orangesOnHouse = orangesPoints.reduce((acc, el) => {
    el >= s && el <= t && (acc += 1);
    return acc;
  }, 0);
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
