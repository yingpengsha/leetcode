/*
 * @lc app=leetcode.cn id=897 lang=typescript
 *
 * [897] 递增顺序查找树
 */

// @lc code=start
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const result = new TreeNode(null)
  let resultRoot = result
  const stack = [root]
  while (stack.length) {
    while (stack[stack.length - 1].left) {
      stack.push(stack[stack.length - 1].left)
    }
    while (stack.length && !stack[stack.length - 1].right) {
      resultRoot = resultRoot.right = new TreeNode(stack.pop().val)
    }
    if (stack.length) {
      const top = stack.pop()
      resultRoot = resultRoot.right = new TreeNode(top.val)
      stack.push(top.right)
    }
  }
  return result.right
};
// @lc code=end

