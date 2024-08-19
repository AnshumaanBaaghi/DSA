function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let firstNode = new ListNode(head.val, head.next.next);
  const newHead = new ListNode(head.next.val, firstNode);
  let node1 = "";
  let node2 = "";

  return newHead;
};
const head = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};
console.log(swapPairs(head));
