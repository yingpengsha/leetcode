/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal (root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const stack: TreeNode[] = []
  while (true) {
    result.push(root.val)
    stack.push(root)
    if (root.left) {
      root = root.left
    } else {
      while (stack.length && !stack[stack.length - 1].right) {
        stack.pop()
      }
      if (stack.length) {
        root = stack.pop().right
      } else {
        break
      }
    }
  }
  return result
};
// @lc code=end
