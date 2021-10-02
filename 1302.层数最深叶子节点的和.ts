/*
 * @lc app=leetcode.cn id=1302 lang=typescript
 *
 * [1302] 层数最深叶子节点的和
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

function deepestLeavesSum (root: TreeNode | null): number {
  let currentDeep = [root]
  while (currentDeep.length) {
    const nextDeep = []
    for (let i = 0; i < currentDeep.length; i++) {
      const node = currentDeep[i]
      if (node.left) {
        nextDeep.push(node.left)
      }
      if (node.right) {
        nextDeep.push(node.right)
      }
    }
    if (!nextDeep.length) {
      break
    } else {
      currentDeep = nextDeep
    }
  }

  let sum = 0
  for (let i = 0; i < currentDeep.length; i++) {
    sum += currentDeep[i].val
  }
  return sum
};
// @lc code=end
