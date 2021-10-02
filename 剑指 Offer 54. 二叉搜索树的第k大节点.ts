/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 中序遍历
function kthLargest (root: TreeNode | null, k: number): number {
  const stack: TreeNode [] = [root]
  const values: number[] = []
  while (stack.length) {
    while (stack[stack.length - 1].right) {
      stack.push(stack[stack.length - 1].right)
    }
    while (stack.length && !stack[stack.length - 1].left) {
      values.push(stack.pop().val)
      if (values.length === k) {
        return values.pop()
      }
    }
    if (stack.length) {
      values.push(stack[stack.length - 1].val)
      if (values.length === k) {
        return values.pop()
      }
      stack.push(stack.pop().left)
    }
  }
};
