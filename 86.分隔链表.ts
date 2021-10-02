/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
 */

// @lc code=start
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function partition (head: ListNode | null, x: number): ListNode | null {
  const VHead = new ListNode(null, head)
  let lastMinNode = VHead
  let current = VHead
  while (current && current.next) {
    if (current.next.val < x) {
      if (current === lastMinNode) {
        current = lastMinNode = current.next
      } else {
        const nodeTemp = current.next
        current.next = nodeTemp.next
        nodeTemp.next = lastMinNode.next
        lastMinNode = lastMinNode.next = nodeTemp
      }
    } else {
      current = current.next
    }
  }
  return VHead.next
};
// @lc code=end
