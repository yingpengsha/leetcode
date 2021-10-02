/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
// class Node {
//   val: number
//   next: Node | null
//   random: Node | null
//   constructor(val?: number, next?: Node, random?: Node) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//     this.random = (random === undefined ? null : random)
//   }
// }

function copyRandomList (head: Node | null): Node | null {
  if (!head) return head
  const nodeMap = new WeakMap()
  const newVHead = new Node(null)
  let current = newVHead
  while (head) {
    if (!nodeMap.has(head)) {
      nodeMap.set(head, new Node(head.val, head.next, head.random))
    }
    current = current.next = nodeMap.get(head)
    head = head.next

    if (current.random) {
      if (!nodeMap.has(current.random)) {
        nodeMap.set(current.random, new Node(current.random.val, current.random.next, current.random.random))
      }
      current.random = nodeMap.get(current.random)
    }
  }
  return newVHead.next
};
// @lc code=end
