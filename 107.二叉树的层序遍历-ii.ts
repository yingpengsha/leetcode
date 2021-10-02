/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom (root: TreeNode | null): number[][] {
  if (!root) return []
  let currentDeep = [root]
  const result: number[][] = []
  while (currentDeep.length) {
    const children: TreeNode[] = []

    result.unshift(currentDeep.map(node => {
      if (node.left) {
        children.push(node.left)
      }
      if (node.right) {
        children.push(node.right)
      }
      return node.val
    }))

    currentDeep = children
  }
  return result
};
// @lc code=end
