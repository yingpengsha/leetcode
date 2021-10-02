/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

function kthSmallest (root: TreeNode | null, k: number): number {
  const result = []
  const stack = [root]
  while (stack) {
    while (stack[stack.length - 1].left) {
      stack.push(stack[stack.length - 1].left)
    }
    while (stack.length && !stack[stack.length - 1].right) {
      result.push(stack.pop().val)
      if (result.length === k) {
        return result.pop()
      }
    }
    if (stack.length) {
      const top = stack.pop()
      result.push(top.val)
      if (result.length === k) {
        return result.pop()
      }
      stack.push(top.right)
    }
  }
};
// @lc code=end
