function checkForSymmetry(n, matrix) {
  //write code here
  const isHori = isHorizontal(matrix);
  const isVerti = isVertical(matrix);

  if (isHori && isVerti) {
    console.log("BOTH");
  } else if (isHori) {
    console.log("HORIZONTAL");
  } else if (isVerti) {
    console.log("VERTICAL");
  } else {
    console.log("NO");
  }
}

function isHorizontal(arr) {
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isVertical(arr) {
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].split("").reverse().join("")) {
      return false;
    }
  }
  return true;
}
