const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.treeRoot = null;
	}

	root() {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		return this.treeRoot;
	}

	add(data) {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		const node = this.treeRoot;

		if (node === null) {
			this.treeRoot = new Node(data);
			return;
		}

		const searchTree = function(node) {
			if (data < node.data) {
				if (node.left === null) {
					node.left = new Node(data);
					return;
				}

				if (node.left !== null) {
					return searchTree(node.left);
				}
			} else if (data > node.data) {
				if (node.right === null) {
					node.right = new Node(data);
					return;
				}

				if (node.right !== null) {
					return searchTree(node.right);
				}
			}
		};

		return searchTree(node);
	}

	find(data) {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		let current = this.treeRoot;

		while (current.data !== data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}

			if (current === null) {
				return null;
			}
		}

		return current;
	}

	has(data) {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		let current = this.treeRoot;

		while (current) {
			if (data === current.data) {
				return true;
			}

			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return false;
	}

	remove(data) {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		const removeNode = function (node, data) {
			if (node === null) return null;

			if (data === node.data) {
				if (node.left === null && node.right === null) {
					return null;
				}

				if (node.left === null) {
					return node.right;
				}

				if (node.right === null) {
					return node.left;
				}

				let tempNode = node.right;

				while (tempNode.left !== null) {
					tempNode = tempNode.left;
				}

				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);

				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			}
		};

		this.treeRoot = removeNode(this.treeRoot, data);
	}

	min() {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');
		if (this.treeRoot === null) return null;

		let current = this.treeRoot;
		while (current.left !== null) {
			current = current.left;
		}

		return current.data;
	}

	max() {
		// Remove line below and write your code here
		// throw new NotImplementedError('Not implemented');

		if (this.treeRoot === null) return null;

		let current = this.treeRoot;
		while (current.right !== null) {
			current = current.right;
		}

		return current.data;
	}
}

module.exports = {
	BinarySearchTree,
};
