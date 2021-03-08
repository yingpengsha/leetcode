/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseN(head: ListNode | null, count: number): ListNode | null {
  if (count === 1) return head
  const latest = reverseN(head.next, --count)
  const latestNext = head.next.next
  head.next.next = head
  head.next = latestNext
  return latest
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || !head.next || left === right) return head
  let newHead = new ListNode(0, head)
  let leftTemp = left
  while (--leftTemp) newHead = newHead.next
  // console.log(newHead)
  newHead.next = reverseN(newHead.next, right - left + 1)
  return left === 1 ? newHead.next : head
};
// @lc code=end

