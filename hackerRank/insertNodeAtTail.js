function insertNodeAtTail(head, data) {
  class NodeList {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  if (!head) {
    head = new NodeList(data);
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = new NodeList(data);
  }
  return head;
}

let head = null;

for (let i = 1; i <= 5; i++) {
  console.log("head:", head);
  head = insertNodeAtTail(head, i);
  console.log("head:", head);
  console.log("----------------");
}
