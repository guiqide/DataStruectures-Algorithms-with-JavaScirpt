/**
 * Created by GUIQD on 2016-10-20.
 */
/**
 * 二叉树类的实现
 * @param data
 * @param left
 * @param right
 * @constructor
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
module.exports = function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.find = find;
};
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
// 中序遍历
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        process.stdout.write(node.show() + ' ');
        inOrder(node.right);
    }
}
// 先序遍历
function preOrder(node) {
    if (!(node == null)) {
        process.stdout.write(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        process.stdout.write(node.show() + ' ');
    }
}
function find(data) {
    var current = this.root;
    while(current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}