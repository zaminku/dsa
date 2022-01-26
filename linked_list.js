
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
