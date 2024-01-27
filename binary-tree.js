/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null)
      return 0;
    let toVisitQueue = [this.root];
    let toVisitChildrenQueue = [this.root.left, this.root.right];
    let depth = 1;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if(current.left === null || current.right === null)
        return depth;  

      if(toVisitQueue.length === 0 && toVisitChildrenQueue.length != 0) {
        depth = depth + 1;
        toVisitQueue.push(...toVisitChildrenQueue);
        toVisitChildrenQueue = [];
        for(let child of toVisitQueue) {
          toVisitChildrenQueue.push(child.left, child.right);
        }
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(this.root === null)
      return 0;
    let toVisitQueue = [this.root];
    let toVisitChildrenQueue = [this.root.left, this.root.right];
    let depth = 1;
    while (toVisitQueue.length) {
      toVisitQueue.shift();

      if(toVisitQueue.length === 0 && toVisitChildrenQueue.length != 0) {
        depth = depth + 1;
        toVisitQueue.push(...toVisitChildrenQueue);
        toVisitChildrenQueue = [];
        for(let child of toVisitQueue) {
          if(child.left != null )
            toVisitChildrenQueue.push(child.left)
          if(child.right != null )
            toVisitChildrenQueue.push(child.right);
        }
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    function maxPathSum(node) {
      if (node === null) {
        return 0;
      }
  
      let leftMaxSum = Math.max(0, maxPathSum(node.left));
      let rightMaxSum = Math.max(0, maxPathSum(node.right));
      let includeNodeMaxSum = node.val + leftMaxSum + rightMaxSum;
  
      maxSum = Math.max(maxSum, includeNodeMaxSum);
  
      return node.val + Math.max(leftMaxSum, rightMaxSum);
    }
  
    maxPathSum(this.root);
  
    return maxSum;
    
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(this.root === null)
      return null;
    let toVisitQueue = [this.root];
    let toVisitChildrenQueue = [this.root.left, this.root.right];
    let nextLarger = null;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if(current.val > lowerBound) {
        if(nextLarger === null)
          nextLarger = current.val;
        else if (current.val < nextLarger)
          nextLarger = current.val;
      }

      if(toVisitQueue.length === 0 && toVisitChildrenQueue.length != 0) {
        toVisitQueue.push(...toVisitChildrenQueue);
        toVisitChildrenQueue = [];

        for(let child of toVisitQueue) {
          if(child.left != null )
            toVisitChildrenQueue.push(child.left)
          if(child.right != null )
            toVisitChildrenQueue.push(child.right);
        }
      }
    }
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
