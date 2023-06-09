// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;

    // Place fast 3 nodes forward 
    while(n > 0) {
        fast = fast.next;
        n--
    }

    // Move both slow and fast by 1 node until fast riches to the tail
    while(fast.next) {
        slow = slow.next
        fast = fast.next;
    }
    // return slow
    return slow
}

module.exports = fromLast;
