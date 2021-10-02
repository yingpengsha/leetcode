/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree (preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null
  const root = new TreeNode(preorder.shift())
  const rootIndex = inorder.findIndex(value => value === root.val)
  if (rootIndex >= 0) {
    root.left = buildTree(preorder, inorder.slice(0, rootIndex))
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1))
  }
  return root
};
// @lc code=end
