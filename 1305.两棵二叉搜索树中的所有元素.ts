/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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

function getValues(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const stack = [root]
  while (stack.length) {
    while (stack[stack.length - 1].left) {
      stack.push(stack[stack.length - 1].left)
    }
    while (stack.length && !stack[stack.length - 1].right) {
      result.push(stack.pop().val)
    }
    if (stack.length && stack[stack.length - 1].right) {
      const top = stack.pop()
      result.push(top.val)
      stack.push(top.right)
    }
  }
  return result
}

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const list1 = getValues(root1)
  const list2 = getValues(root2)
  const result: number[] = []
  while (list1.length && list2.length) {
    if (list1[0] <= list2[0]) {
      result.push(list1.shift())
    } else {
      result.push(list2.shift())
    }
  }
  return result.concat(list1, list2)
};
// @lc code=end

