// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// Linked list values

const linkedListValues = (head) => {
    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values;

    // let values = [];
    // fillValues(head, values); // updates values array
    // return values;
};


// fillValues function recursively adds each node's value to
// an initially empty values array
const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}

// iterative
// n = # nodes
// time: O(n)
// space: O(n)


// recursive
// time: O(n)
// space: O(n)




// Sum linked lists

const sumList = (head) => {
    // todo
    //   let sum = 0;
    //   let current = head;

    //   while (current !== null) {
    //     sum += current.val;
    //     current = current.next;
    //   }

    //   return sum;


    // recursive
    // if (head === null) return 0;
    // return head.val + sumList(head.next);
};


// iterative
// n = # nodes
// time: O(n)
// space: O(1)


// recursive
// time: O(n)
// space: O(n)




// Linked list find

const linkedListFind = (head, target) => {
    // todo

    //   let current = head;
    //   while (current !== null) {
    //     if (current.val === target) return true;
    //     current = current.next;
    //   }

    //   return false;

    // recursive
    if (head === null) return false;
    if (head.val === target) return true;
    return linkedListFind(head.next, target);
};


// iterative
// time: O(n)
// space: O(1)

// recursive
// time: O(n)
// space: O(n) - bc of the call stack