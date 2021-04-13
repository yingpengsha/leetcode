/*
 * @lc app=leetcode.cn id=117 lang=typescript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) return root
  let currentDeep = [root]
  while (currentDeep.length) {
    const children: Node[] = []
    for (let i = 0; i < currentDeep.length; i++) {
      currentDeep[i].next = currentDeep[i + 1] || null
      currentDeep[i].left && children.push(currentDeep[i].left)
      currentDeep[i].right && children.push(currentDeep[i].right)
    }
    currentDeep = children
  }
  return root
};
// @lc code=end

