/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let currentDeep = [root]
  let rightToLeft = false
  const result: number[][] = []
  while (currentDeep.length) {
    const children: TreeNode[] = []

    result.push(currentDeep.map(node => {
      if (rightToLeft) {
        node.right && children.unshift(node.right)
        node.left && children.unshift(node.left)
      } else {
        node.left && children.unshift(node.left)
        node.right && children.unshift(node.right)
      }
      return node.val
    }))
    rightToLeft = !rightToLeft
    currentDeep = children
  }
  return result
};
// @lc code=end

