/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum (root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  return getLeafSum(root, targetSum, 0)
};

function getLeafSum (root: TreeNode, targetSum: number, beforeValue: number): boolean {
  if (!root.left && !root.right) return beforeValue + root.val === targetSum
  const left = root.left ? getLeafSum(root.left, targetSum, beforeValue + root.val) : false
  const right = root.right ? getLeafSum(root.right, targetSum, beforeValue + root.val) : false
  return left || right
}
// @lc code=end
