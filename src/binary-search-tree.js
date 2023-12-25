const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.insert(this.rootNode, data);
  }

  insert(node, data) {
    if (node === null) {
      return {
        data,
        left: null,
        right: null
      };
    }

    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else if (data > node.data) {
      node.right = this.insert(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  find(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return this.search(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const minValue = this.findMin(node.right);
      node.data = minValue;
      node.right = this.removeNode(node.right, minValue);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};