
const nextGreaterElementLeft = (arr) => {
    const st = [];
    const ans = [];
    for (let i = 0; i <arr.length; i++) {
        while (st.length && arr[i] >= arr[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans.push(arr[st[st.length - 1]]);
        }
        else {
            ans.push(-1);
        }
        st.push(i)
    }
    console.log('ans:', ans)
}
const nextSmallestElementLeft = (arr) => {
    const st = [];
    const ans = [];
    for (let i = 0; i <arr.length; i++) {
        while (st.length && arr[i] <= arr[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans.push(arr[st[st.length - 1]]);
        }
        else {
            ans.push(-1);
        }
        st.push(i)
    }
    console.log('ans:', ans)
}
const nextSmallestElementRight = (arr) => {
    const st = [];
    const ans = [];
    for (let i = arr.length-1; i >=0; i--) {
        while (st.length && arr[i] <= arr[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans.push(arr[st[st.length - 1]]);
        }
        else {
            ans.push(-1);
        }
        st.push(i)
    }
    console.log('ans:', ans.reverse());
}

const nextGreaterElementRight = (arr) => {
    console.log('arr:', arr)
    const st = [];
    const ans = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (st.length && arr[i] >= arr[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length) {
            ans.push(arr[st[st.length - 1]]);
        }
        else {
            ans.push(-1);
        }
        st.push(i)
    }
    console.log('ans:', ans.reverse())
}


nextSmallestElementRight([4, 5, 7, 3, 8, 0, 23, 45])
// thezoloo