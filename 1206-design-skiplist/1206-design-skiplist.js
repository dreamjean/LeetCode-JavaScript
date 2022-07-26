class Node {
  constructor(val, next, down) {
    this.val = val;
    this.next = next;
    this.down = down;
  }
}

var Skiplist = function () {
  this.head = new Node();
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  let curr = this.head;
  while (curr) {
    while (curr.next?.val < target) curr = curr.next;

    if (curr.next?.val === target) return true;

    curr = curr.down;
  }

  return false;
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  const stack = [];
  let [curr, insert, down] = [this.head, true, null];

  while (curr) {
    while (curr.next?.val < num) curr = curr.next;

    stack.push(curr);
    curr = curr.down;
  }

  while (insert && stack.length) {
    curr = stack.pop();
    curr.next = new Node(num, curr.next, down);
    down = curr.next;
    insert = Math.random() < 0.5;
  }

  if (insert) this.head = new Node(-1, null, this.head);
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  let [found, curr] = [false, this.head];
  while (curr) {
    while (curr.next?.val < num) curr = curr.next;

    if (curr.next?.val === num) {
      curr.next = curr.next.next;
      found = true;
    }

    curr = curr.down;
  }

  return found;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
