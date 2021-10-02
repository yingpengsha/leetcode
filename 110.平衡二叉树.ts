/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced (root: TreeNode | null): boolean {
  if (!root) return true
  return getTreeDeep(root) >= 0
};

function getTreeDeep (root: TreeNode): number {
  if (!root) return -1
  const left = getTreeDeep(root.left) + 1
  if (left < 0) return -2
  const right = getTreeDeep(root.right) + 1
  if (right < 0) return -2
  if (Math.abs(left - right) > 1) {
    return -2
  } else {
    return Math.max(left, right)
  }
}
// @lc code=end
