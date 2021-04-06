/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
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
interface OrderNode {
  order: bigint
  node: TreeNode
}
function widthOfBinaryTree(root: TreeNode | null): bigint {
  if (!root) return 0n
  let currentDeep: OrderNode[] = [{ order: 1n, node: root }]
  let max = 1n
  while (currentDeep.length) {
    const children: OrderNode[] = []
    currentDeep.forEach(({ order, node }) => {
      node.left && children.push({ order: order * 2n, node: node.left })
      node.right && children.push({ order: order * 2n + 1n, node: node.right })
    })
    currentDeep = children
    if (children.length) {
      const width = children[children.length - 1].order - children[0].order + 1n
      if (width > max) {
        max = width
      }
    }
  }
  return max
};
// @lc code=end

