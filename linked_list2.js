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




// Get node value

const getNodeValue = (head, index) => {
    // todo
    //   let currIndex = 0;
    //   let currNode = head;

    //   while (currNode !== null) {
    //     if (currIndex === index) {
    //       return currNode.val;
    //     }
    //     currIndex += 1;
    //     currNode = currNode.next;
    //   }

    //   return null;

    // recursive
    // if (head === null) return null;
    // if (index === 0) return head.val;
    // return getNodeValue(head.next, index - 1);
};

// iterative
// time: O(n)
// space: O(1)

// recursive:
// time: O(n)
// space: O(n) // storing every call on the call stack



const reverseList = (head) => {
  // todo
  let current = head;
  let prev = null; // prev var for current.next = prev;
  
  while (current !== null) {
    let next = current.next; // need to keep track of what the initial next is
    current.next = prev; // reverse the order
    prev = current; // update prev to current node
    current = next; // update current to next node
  }
  
  return prev; // current === null, so prev will be the new head of the node (last non-null node)

}


// iterative
// time: O(n)
// space: O(1)

// const reverseList = (head, prev = null) => {
//   // todo
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
  
//   return reverseList(next, head);
  

// }


// recursive:
// time: O(n)
// space: O(n)