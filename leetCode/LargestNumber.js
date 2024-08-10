// const compareNumber = (n1, n2, i1, i2) => {
//   if (n1[i1] && n2[i2]) {
//     if (n1[i1] < n2[i2]) {
//       return true;
//     } else if (n1[i1] > n2[i2]) {
//       return false;
//     } else {
//       return compareNumber(n1, n2, i1 + 1, i2 + 1);
//     }
//   } else if (n1[i1]) {
//     let z = 0;
//     while (n1[i1] && n2[z]) {
//       //   for (let z = 0; z < n2.length; z++) {
//       if (n1[i1] < n2[z]) {
//         return true;
//       } else if (n1[i1] > n2[z]) {
//         return false;
//       }
//       //   }
//       i1++;
//       z++;
//     }
//     if (n2[z]) {
//       return compareNumber(n1, n2, 0, z);
//     }
//     return false;
//   } else if (n2[i2]) {
//     let z = 0;
//     while (n2[i2] && n1[z]) {
//       //   for (let z = 0; z < n1.length; z++) {
//       if (n2[i2] < n1[z]) {
//         return false;
//       } else if (n2[i2] > n1[z]) {
//         return true;
//       }
//       //   }
//       i2++;
//       z++;
//     }
//     if (n1[z]) {
//       return compareNumber(n1, n2, z, 0);
//     }
//     return false;
//   }
//   return false;
// };

const compareNumber = (n1, n2) => {
  let p1 = 0;
  let p2 = 0;
  let p1_n = n1;
  let p2_n = n2;
  const n = n1.length + n2.length;
  for (let i = 0; i < n; i++) {
    if (p1 >= p1_n.length) {
      p1_n = n2;
      p1 = 0;
    }
    if (p2 >= p2_n.length) {
      p2_n = n1;
      p2 = 0;
    }
    if (p1_n[p1] < p2_n[p2]) return true;
    if (p1_n[p1] > p2_n[p2]) return false;
    p1++;
    p2++;
  }

  return false;
};

var largestNumber = function (nums) {
  nums = nums.map(String);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (compareNumber(nums[j], nums[j + 1])) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  const str = nums.join("");
  if (str[0] == "0") {
    return "0";
  }
  return str;
};
const num = [3, 30, 34, 5, 9];
console.log(largestNumber(num));
