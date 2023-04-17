const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  let length = 0;

  let currentVal = l;

  while (currentVal.next) {
    length++;
    currentVal = currentVal.next;
  }

  console.debug(length);

  function indexOf(k) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.value === k) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
function remove (k) {

  let current = head;

  if (indexOf(k) === 0) {
    head = current.next;
  } else {
    let prev = null;
    let index = 0;

    while (index < indexOf(k)) {
      prev = current;
      current = current.next;
      index++;
    }
    prev.next = current.next;
  }

  length--;


}

while(indexOf(k) !== -1){
  console.debug(indexOf(k));
  remove(k)
}
return head;
}
module.exports = {
  removeKFromList,
};
