const nextGreaterElementLeft = (arr) => {
  const st = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (st.length && arr[i] >= arr[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length) {
      ans.push(arr[st[st.length - 1]]);
    } else {
      ans.push(-1);
    }
    st.push(i);
  }
  console.log("ans:", ans);
};
const nextSmallestElementLeft = (arr) => {
  const st = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (st.length && arr[i] <= arr[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length) {
      ans.push(arr[st[st.length - 1]]);
    } else {
      ans.push(-1);
    }
    st.push(i);
  }
  console.log("ans:", ans);
};
const nextSmallestElementRight = (arr) => {
  const st = [];
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length && arr[i] <= arr[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length) {
      ans.push(arr[st[st.length - 1]]);
    } else {
      ans.push(-1);
    }
    st.push(i);
  }
  console.log("ans:", ans.reverse());
};

const nextGreaterElementRight = (arr) => {
  console.log("arr:", arr);
  const st = [];
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (st.length && arr[i] >= arr[st[st.length - 1]]) {
      st.pop();
    }
    if (st.length) {
      ans.push(arr[st[st.length - 1]]);
    } else {
      ans.push(-1);
    }
    st.push(i);
  }
  console.log("ans:", ans.reverse());
};

const nextGreaterElementBoth = (arr) => {
  let stack = [];
  const left = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    stack.length && (left[i] = stack[stack.length - 1]);
    stack.push(i);
  }
  stack = [];
  const right = new Array(arr.length).fill(-1);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    stack.length && (right[i] = stack[stack.length - 1]);
    stack.push(i);
  }
  const ans = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (right[i] == -1) {
      ans[i] = left[i];
    } else if (left[i] == -1) {
      ans[i] = right[i];
    } else {
      right[i] - i < i - left[i] ? (ans[i] = right[i]) : (ans[i] = left[i]);
    }
  }
  console.log("ans:", ans);
};

nextGreaterElementBoth([4, 5, 7, 3, 2, 0, 23, 45]);
// thezoloo
