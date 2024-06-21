const checkTopLeftOverlap = (x, y, left, top, right, bottom) => {
  if (x >= right || x < left || y > top || y <= bottom) {
    return false;
  }
  return true;
};

const checkTopRightOverlap = (x, y, left, top, right, bottom) => {
  if (x > right || x <= left || y > top || y <= bottom) {
    return false;
  }
  return true;
};
const checkBottomLeftOverlap = (x, y, left, top, right, bottom) => {
  if (x >= right || x < left || y >= top || y < bottom) {
    return false;
  }
  return true;
};
const checkBottomRightOverlap = (x, y, left, top, right, bottom) => {
  if (x > right || x <= left || y >= top || y < bottom) {
    return false;
  }
  return true;
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  const [R1_TL_x, R1_TL_y] = input[0].trim().split(" ").map(Number);
  const [R2_TL_x, R2_TL_y] = input[1].trim().split(" ").map(Number);
  const [R1_BR_x, R1_BR_y] = input[2].trim().split(" ").map(Number);
  const [R2_BR_x, R2_BR_y] = input[3].trim().split(" ").map(Number);

  const [R1_TR_x, R1_TR_y] = [R1_BR_x, R1_TL_y];
  const [R1_BL_x, R1_BL_y] = [R1_TL_x, R1_BR_y];

  const [R2_TR_x, R2_TR_y] = [R2_BR_x, R2_TL_y];
  const [R2_BL_x, R2_BL_y] = [R2_TL_x, R2_BR_y];

  const check =
    checkTopLeftOverlap(R1_TL_x, R1_TL_y, R2_TL_x, R2_TL_y, R2_BR_x, R2_BR_y) ||
    checkTopRightOverlap(
      R1_TR_x,
      R1_TR_y,
      R2_TL_x,
      R2_TL_y,
      R2_BR_x,
      R2_BR_y
    ) ||
    checkBottomLeftOverlap(
      R1_BL_x,
      R1_BL_y,
      R2_TL_x,
      R2_TL_y,
      R2_BR_x,
      R2_BR_y
    ) ||
    checkBottomRightOverlap(
      R1_BR_x,
      R1_BR_y,
      R2_TL_x,
      R2_TL_y,
      R2_BR_x,
      R2_BR_y
    ) ||
    checkTopLeftOverlap(R2_TL_x, R2_TL_y, R1_TL_x, R1_TL_y, R1_BR_x, R1_BR_y) ||
    checkTopRightOverlap(
      R2_TR_x,
      R2_TR_y,
      R1_TL_x,
      R1_TL_y,
      R1_BR_x,
      R1_BR_y
    ) ||
    checkBottomLeftOverlap(
      R2_BL_x,
      R2_BL_y,
      R1_TL_x,
      R1_TL_y,
      R1_BR_x,
      R1_BR_y
    ) ||
    checkBottomRightOverlap(
      R2_BR_x,
      R2_BR_y,
      R1_TL_x,
      R1_TL_y,
      R1_BR_x,
      R1_BR_y
    );
  console.log(check ? "YES" : "NO");
}
if (process.env.USERNAME === "divya") {
  runProgram(`5 5
    5 3
    8 3
    8 0`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
