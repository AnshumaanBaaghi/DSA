function primeSumUp(num) {
  // Write code here
  let arr = [];
  for (let i = 2; i <= num; ++i) {
    flag = true;
    for (let j = 0; j <= arr.length; ++j) {
      if (i % arr[j] == 0) flag = false;
    }
    if (flag) arr.push(i);
  }
  // console.log(arr)
  let g = arr.reduce((q, w) => q + w, 0);
  console.log(g);
}
