const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootVal = null;
  }
  root() {
    if (!this.rootVal) {
      return null;
    } else {
      return this.rootVal;
    }
  }

  add(data) {
    this.rootVal = addInside(this.rootVal, data);

    function addInside(node, data) {

      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return node;
      }
      if (node.data > data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }
  has(data) {
    return searchV(this.rootVal, data);

    function searchV(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? searchV(node.left, data)
        : searchV(node.right, data);
    }
  }

  find(data) {
    return findValue(this.rootVal, data);

    function findValue(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
return node;
      }
      return data < node.data ? findValue(node.left, data) : findValue(node.right, data)
    }
     }

  remove(data) {
    this.rootVal = removeNode(this.rootVal, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minimumRight = node.right;
        while (minimumRight.left) {
          minimumRight = minimumRight.left;
        }
        node.data = minimumRight.data;
        node.right = removeNode(node.right, minimumRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootVal) {
      return;
    }
    let nodeV = this.rootVal;
    while (nodeV .left) {
      nodeV  = nodeV .left;
    }
    return nodeV .data;
  }

  max() {
    if (!this.rootVal) {
      return;
    }
    let nodeV = this.rootVal;
    while (nodeV.right) {
      nodeV = nodeV.right;
    }
    return nodeV.data;
  }
}

module.exports = {
  BinarySearchTree,
};
