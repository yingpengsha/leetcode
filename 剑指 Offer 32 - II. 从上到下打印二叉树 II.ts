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

function levelOrder (root: TreeNode | null): number[][] {
  if (!root) return []
  let currentDeep = [root]
  const result: number[][] = []
  while (currentDeep.length) {
    const children: TreeNode[] = []
    result.push(currentDeep.map(node => {
      children.push(...[node.left, node.right].filter(Boolean))
      return node.val
    }))
    currentDeep = children
  }
  return result
};
