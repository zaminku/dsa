class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> null
// cur


// iterate through linked list (non-recursive)
const printLinkedList = (head) => {
    let current = head;

    // common mistake to write current.next !== null (won't print out D bc d.next = null)
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};

printLinkedList(a);


