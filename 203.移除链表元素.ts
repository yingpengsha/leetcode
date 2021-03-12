/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const VNode = new ListNode(null)
  let current = VNode
  while (head) {
    if (head.val !== val) {
      current = current.next = new ListNode(head.val)
    }
    head = head.next
  }
  return VNode.next
};
// @lc code=end

