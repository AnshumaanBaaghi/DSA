function processData(input) {
  input = input.trim().split("\n");
  let totalHouse = Number(input[0].trim().split(" ")[0]);
  let totalRouters = Number(input[0].trim().split(" ")[1]);

  let pos = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);

  let isPossible = (range) => {
    let curr = pos[0] + range;
    let max = curr + range;
    let router = 1;
    pos.map((e) => {
      if (e > max) {
        curr = e + range;
        max = curr + range;
        router++;
      }
    });
    return router <= totalRouters;
  };

  let lo = 1,
    hi = 10 ** 7;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (isPossible(mid)) {
      hi = mid;
    } else lo = mid + 1;
  }
  console.log(lo);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
