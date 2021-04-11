/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
// class Node {
//     val: number
//     children: Node[]
//     constructor(val?: number) {
//         this.val = (val===undefined ? 0 : val)
//         this.children = []
//     }
// }

function levelOrder(root: Node | null): number[][] {
  if (!root) return []
  const result: number[][] = []
  let currentDeep = [root]
  while (currentDeep.length) {
    const children: Node[] = []
    result.push(currentDeep.map(node => {
      children.push(...node.children)
      return node.val
    }))
    currentDeep = children
  }
  return result
};
// @lc code=end

