/*
 * @lc app=leetcode.cn id=783 lang=typescript
 *
 * [783] 二叉搜索树节点最小距离
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

function minDiffInBST(root: TreeNode | null): number {
  const preorder: number[] = []
  const stack = [root]
  while (stack.length) {
    while (stack[stack.length - 1].left) {
      stack.push(stack[stack.length - 1].left)
    }
    while (stack.length && !stack[stack.length - 1].right) {
      preorder.push(stack.pop().val)
    }
    if (stack.length) {
      const current = stack.pop()
      preorder.push(current.val)
      stack.push(current.right)
    }
  }
  
  let min = Infinity
  for (let i = 1; i < preorder.length; i++) {
    const diff = preorder[i] - preorder[i - 1]
    if (diff < min) {
      min = diff
    }
  }
  return min
};
// @lc code=end

