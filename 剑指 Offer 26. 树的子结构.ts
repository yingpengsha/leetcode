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

// 先序遍历
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B || !A) return false
  if (A.val === B.val && isMatch(A, B)) {
    return true
  } else {
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
  }
};

function isMatch(A: TreeNode, B: TreeNode): boolean {
  if (!A) return false
  if (A.val === B.val) {
    const left = B.left ? isMatch(A.left, B.left) : true
    const right = B.right ? isMatch(A.right, B.right) : true
    return left && right
  } else {
    return false
  }
}