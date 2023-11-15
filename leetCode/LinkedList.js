function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList {
    constructor() { }
    AddTwoNumbers(l1, l2) {
        let p1 = l1;
        let p2 = l2;
        let carry = 0;
        const head = new ListNode();
        let sum = (+p1.val) + (+p2.val);
        sum += "";
        if (sum.length < 2) {
            carry = 0;
            head.val = sum;
        }
        else {
            carry = sum[0];
            head.val = sum[1];
        }
        let current = head;
        p1 = p1.next;
        p2 = p2.next;
        while (p1 !== null && p2 !== null) {
            let sum = (+p1.val) + (+p2.val) + (+carry);
            sum += "";
            const node = new ListNode();
            if (sum.length < 2) {
                carry = 0;
                node.val = sum;
            }
            else {
                carry = sum[0];
                node.val = sum[1];
            }
            current.next = node;
            current = current.next;
            p1 = p1.next;
            p2 = p2.next;
        }
        while(p1){
            let sum = (+p1.val) + (+carry);
            sum += "";
            const node = new ListNode();
            if (sum.length < 2) {
                carry = 0;
                node.val = sum;
            }
            else {
                carry = sum[0];
                node.val = sum[1];
            }
            current.next = node;
            current = current.next;
            p1 = p1.next;
        }
        while(p2){
            let sum = (+p2.val) + (+carry);
            sum += "";
            const node = new ListNode();
            if (sum.length < 2) {
                carry = 0;
                node.val = sum;
            }
            else {
                carry = sum[0];
                node.val = sum[1];
            }
            current.next = node;
            current = current.next;
            p2 = p2.next;
        }
        if(carry!=0){
            const node = new ListNode();
            node.val = carry;
            current.next = node;
        }
        return head
        // let c = head
        // while(c){
        //     console.log(c.val);
        //     c = c.next
        // }
    }

}
const LinkedMethods = new LinkedList();
const l1 = {
    val:2,next:{
        val:9,next:{
            val:9,next:{
                val:9,next:null
            }
        }
    }
}
const l2 = {
    val:9,next:null
}
LinkedMethods.AddTwoNumbers(l1,l2)
