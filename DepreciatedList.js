/*
class Node {
    constructor(num) {
        this.data = num;
        this.next = null;
    }
}
*/
function removeNodes(head) {
  let temp = head;
  let st = [];
  while (temp !== null) {
    if (st.length === 0) {
      st.push(temp.data);
      temp = temp.next;
    } else {
      while (st.length !== 0) {
        if (st[st.length - 1] < temp.data) {
          st.pop();
        } else {
          break;
        }
      }
      st.push(temp.data);
      temp = temp.next;
    }
  }
  let res = [];
  while (st.length !== 0) {
    res.push(st.pop());
  }
  res.reverse();
  temp = head;
  for (let i = 0; i < res.length; i++) {
    temp.data = res[i];
    if (i === res.length - 1) {
      temp.next = null;
    } else {
      temp = temp.next;
    }
  }
  return head;
}
