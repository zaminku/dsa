const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
};

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
};

const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
};

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;
    while (current !== null) {
        if (count === index) return current.val;
        current = current.next;
        count += 1;
    }
    return null;
};

const reverseList = (head) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};