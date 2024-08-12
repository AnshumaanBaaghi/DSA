// const str = "aanshumaan";

// console.log(str.includes("ansh"));

// const Includes = (str, q) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === q[0]) {
//       let flag = true;
//       let j = 0;
//       let z = i;
//       while (j < q.length) {
//         if (str[z] !== q[j]) {
//           flag = false;
//           break;
//         }
//         z++;
//         j++;
//       }
//       if (flag) return true;
//     }
//   }
//   return false;
// };

const Includes = (str, q) => {
  if (q.length > str.length) return false;
  let window1 = "";
  for (let i = 0; i < q.length; i++) {
    window1 += str[i];
  }
  if (window1 == q) return true;
  let start = 0;
  let end = q.length;
  let prefix = "";
  while (end < str.length) {
    window1 += str[end++];
    prefix += str[start++];
    if (window1 === prefix + q) return true;
  }
  return false;
};

console.log(Includes("aaanshumaanz", "z"));
