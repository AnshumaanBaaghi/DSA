/*
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let head;
    let p1 = list1;
    let p2 = list2;
    if (p1 && p2) {
        if (p1.val < p2.val) {
            head = new ListNode(pl.val);
            p1 = p1.next;
        }
        else {
            head = new ListNode(p2.val);
            p2 = p2.next;
        }

        let current = head;
        while (p1 !== null && p2 !== null) {
            if (p1.val < p2.val) {
                let newNode = new ListNode(p1.val);
                current.next = newNode;
                current = current.next;
                p1 = p1.next;
            }
            else {
                let newNode = new ListNode(p2.val);
                current.next = newNode;
                current = current.next;
                p2 = p2.next;
            }
        }
        if(p1){
            current.next = p1;
        }
        else if(p2){
            current.next = p2;
        }
        return head
    }
    else if(p1.val){
        return p1
    }
    else{
        return p2
    }
};

const l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
}
const l2 = {

};
console.log(mergeTwoLists(l1, l2));