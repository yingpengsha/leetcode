/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function postorderTraversal (root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const stack: TreeNode[] = []
  let pre: TreeNode
  while (root) {
    stack.push(root)
    if (root.right === pre) {
      result.push(root.val)
      pre = stack.pop()
      root = stack.pop()
    } else if (root.left && root.left !== pre) {
      root = root.left
    } else if (root.right) {
      root = root.right
    } else {
      result.push(root.val)
      pre = stack.pop()
      root = stack.pop()
    }
  }
  return result
};
// @lc code=end
