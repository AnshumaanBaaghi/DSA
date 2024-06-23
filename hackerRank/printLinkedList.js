function printLinkedList(head) {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

const linkedlist = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: null,
        },
      },
    },
  },
};
printLinkedList(linkedlist);
