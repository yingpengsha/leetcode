/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }

function inorderTraversal (root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const stack: TreeNode[] = []
  while (true) {
    stack.push(root)
    if (root.left) {
      root = root.left
    } else {
      while (stack.length && !stack[stack.length - 1].right) {
        result.push(stack[stack.length - 1].val)
        stack.pop()
      }
      if (stack.length) {
        result.push(stack[stack.length - 1].val)
        root = stack.pop().right
      } else {
        break
      }
    }
  }
  return result
};
// @lc code=end
